import { Injectable } from '@angular/core';
import { User } from '@core/models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<User>;
  public user$: Observable<User>;

  constructor() {
    this.userSubject = new BehaviorSubject<User>(null);
    this.user$ = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  public set userValue(user) {
    this.userSubject.next(user);
  }

  public isAuthenticated() {
    return true;
  }

  public getToken() {
    return '';
  }
}
