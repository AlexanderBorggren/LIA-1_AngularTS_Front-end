import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';

interface KlarnaWindow {
  Payments: {
    Buttons: {
      init: (config: { client_id: string }) => {
        load: (config: KlarnaLoadConfig, callback: (result: KlarnaLoadResult) => void) => void;
      };
    };
  };
}

interface KlarnaLoadConfig {
  container: HTMLElement;
  theme: string;
  shape: string;
  on_click: (authorize: KlarnaAuthorizeFunction) => void;
}

interface KlarnaLoadResult {
  show_form: boolean;
}

interface KlarnaAuthResult {
  authorization_token?: string;
}

type KlarnaAuthorizeFunction = (
  config: { collect_shipping_address: boolean },
  payload: KlarnaOrderPayload,
  callback: (result: KlarnaAuthResult) => void,
) => void;

interface KlarnaOrderPayload {
  purchase_country: string;
  purchase_currency: string;
  locale: string;
  order_amount: number;
  order_tax_amount: number;
  order_lines: KlarnaOrderLine[];
}

interface KlarnaOrderLine {
  type: string;
  name: string;
  quantity: number;
  unit_price: number;
  tax_rate: number;
  total_amount: number;
  total_tax_amount: number;
}

declare global {
  interface Window {
    Klarna: KlarnaWindow;
    klarnaAsyncCallback: () => void;
  }
}

@Component({
  selector: 'app-klarna-payments',
  template: `<div
    id="klarna-payment-container"
    class="flex flex-col w-full"
    #klarnaContainer
  ></div> `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KlarnaPaymentsComponent implements OnInit, AfterViewInit {
  @ViewChild('klarnaContainer') klarnaContainer!: ElementRef;
  readonly cartService = inject(CartService);

  private clientId =
    'klarna_test_client_aDlUQW8yPzlvOXZCLSkpWXB2eXRtKShIdFNRckNyRjEsMDE4YjVkNzUtMmQzNi00NzFkLTk0ODAtY2RiYmNkNmY0ZmEzLDEsVDhvY2NKSE4zLzlhaUNtWWl6OWNoZFFhbCt0YXIxYWw3ZG1aUHlBZEUxWT0';

  constructor(private router: Router) {
    this.loadKlarnaScript();
  }

  ngOnInit() {
    window.klarnaAsyncCallback = this.initializeKlarnaPayments.bind(this);
  }

  ngAfterViewInit() {
    this.initializeKlarnaPayments();
  }

  private loadKlarnaScript() {
    if (document.getElementById('klarna-script')) return;

    const script = document.createElement('script');
    script.id = 'klarna-script';
    script.src = 'https://x.klarnacdn.net/kp/lib/v1/api.js';
    script.async = true;
    document.head.appendChild(script);
  }

  private initializeKlarnaPayments() {
    if (!window.Klarna?.Payments?.Buttons) return;

    const container = this.klarnaContainer.nativeElement;

    window.Klarna.Payments.Buttons.init({
      client_id: this.clientId,
    }).load(
      {
        container: container,
        theme: 'default',
        shape: 'default',
        on_click: this.handleKlarnaAuthorization.bind(this),
      },
      this.handleLoadCallback.bind(this),
    );
  }

  private handleKlarnaAuthorization = (authorize: KlarnaAuthorizeFunction) => {
    const cartItems = this.cartService.cartItems();

    const orderLines = cartItems.map((item) => ({
      type: 'physical',
      name: item.title,
      quantity: item.quantity,
      unit_price: item.price * 100,
      tax_rate: 2500,
      total_amount: item.price * 100 * item.quantity,
      total_tax_amount: (item.price * 100 * item.quantity) / 5,
    }));

    const orderPayload = {
      purchase_country: 'SE',
      purchase_currency: 'SEK',
      locale: 'sv-SE',
      order_amount: orderLines.reduce((sum, line) => sum + line.total_amount, 0),
      order_tax_amount: orderLines.reduce((sum, line) => sum + line.total_tax_amount, 0),
      order_lines: orderLines,
    };

    authorize(
      { collect_shipping_address: true },
      orderPayload,
      this.handleAuthorizationResult.bind(this),
    );
  };

  private handleAuthorizationResult(result: KlarnaAuthResult) {
    if (result.authorization_token) {
      this.router.navigate(['/checkout-complete']);
      this.cartService.completePayment();
    } else {
      console.error('Auktorisering misslyckades', result);
    }
  }

  private handleLoadCallback(loadResult: KlarnaLoadResult) {
    if (loadResult.show_form) {
      this.cartService.resetPaymentComplete();
    } else {
      console.error('Kunde inte ladda Klarna-formulär', loadResult);
    }
  }
}
