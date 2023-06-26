import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  private static KEY: string = "authentication";

  constructor() { }

  public login(): boolean {
    localStorage.setItem(AuthenticatorService.KEY, "fake-jwt-token");
    return true;
  }

  public logout(): boolean {
    localStorage.removeItem(AuthenticatorService.KEY);
    return false;
  }

  public isAuthenticate(): boolean {
    return localStorage.getItem(AuthenticatorService.KEY) != null;
  }

  public getToken(): string|null {
    return localStorage.getItem(AuthenticatorService.KEY);
  }

}
