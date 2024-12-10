import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-checkout-complete',
  standalone: true,
  imports: [],
  templateUrl: './checkout-complete.component.html',
  styleUrl: './checkout-complete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutCompleteComponent {
  orderNumber = Number(
    Array.from({ length: 10 }, () => Math.floor(Math.random() * 9) + 1).join(''),
  );
}
