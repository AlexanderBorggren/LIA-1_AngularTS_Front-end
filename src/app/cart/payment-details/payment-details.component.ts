import { Component, ChangeDetectionStrategy } from '@angular/core';
import { inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentDetailsComponent implements OnInit {
  readonly cartService = inject(CartService);

  completePayment() {
    this.cartService.completePayment();
  }

  paymentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      cardHolderName: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiryDate: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
    });
  }

  get f() {
    return this.paymentForm.controls;
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      console.log('Payment Details:', this.paymentForm.value);
    }
  }
}
