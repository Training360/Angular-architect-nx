import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent,
    RouterModule,
  ],
  selector: 'app-product-entry',
  template: `
  <h1>Remote Entry Component</h1>
  <a routerLink="editor">Editor</a>
  `,
})
export class RemoteEntryComponent {}
