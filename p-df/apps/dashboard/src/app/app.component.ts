import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UserService } from "@p-df/shared/data-access-user";
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    AsyncPipe,
    CommonModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dashboard';

  userService = inject(UserService);

  isLoggedIn$ = this.userService.isUserLoggedIn$;
}
