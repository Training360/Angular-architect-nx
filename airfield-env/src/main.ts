import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

console.log('>>> NX_API_URL', process.env['NX_API_URL']);
console.log('>>> NX_API_HOST', process.env['NX_API_HOST']);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
