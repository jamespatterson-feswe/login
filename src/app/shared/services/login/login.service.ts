import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /** private variables */
  private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /** public variables */
  public isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();


  constructor() {}

  /** public methods */
  public loginUser(): void {
    this.isLoggedIn.next(true);
  }

  public logoutUser(): void {
    this.isLoggedIn.next(false);
  }
}
