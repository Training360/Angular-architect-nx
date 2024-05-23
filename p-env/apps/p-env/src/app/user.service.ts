import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient);

  apiUrl = process.env['NX_API_URL'] || 'http://localhost:3000/users';

  list$ = new BehaviorSubject<User[]>([]);

  load(): void {
    this.http.get<User[]>(this.apiUrl).subscribe((users) => {
      this.list$.next(users);
    });
  }


}
