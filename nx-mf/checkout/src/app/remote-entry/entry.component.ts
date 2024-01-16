import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'nx-mf-checkout-entry',
  template: `<nx-mf-nx-welcome></nx-mf-nx-welcome>`,
})
export class RemoteEntryComponent {}
