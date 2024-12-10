import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-checkout-failed',
  standalone: true,
  imports: [],
  templateUrl: './checkout-failed.component.html',
  styleUrl: './checkout-failed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutFailedComponent {}
