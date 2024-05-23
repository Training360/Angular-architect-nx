import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-checkout-entry',
  template: `<h1>Welcome to checkout!</h1>`,
})
export class RemoteEntryComponent {}
