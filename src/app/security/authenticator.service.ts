import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { AuthenticationResponse } from "../interface/authentication-response.interface";
import { KeyStorage } from "../enum/key-storage";
import { BehaviorSubject } from "rxjs";
import { AuthenticateUser } from "../interface/authenticate-user";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  state = new BehaviorSubject<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private httpClient: HttpClient) { }

  public login(username: string, password: string): void {
    this.httpClient.post<AuthenticationResponse>(`${environment.staticUrlApi}/authentication`, { username, password }).subscribe( {

      next: response => {
        if(isPlatformBrowser(this.platformId)) {
          localStorage.setItem(KeyStorage.TOKEN, response.token);
          localStorage.setItem(KeyStorage.USER, JSON.stringify(response.user));
          this.state.next(true);
        }
      },
      error: response => {
        const error = response.error;
        alert(`${error.status} - ${error.message}`);
      }
    });
  }

  public logout(): void {
    if(isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(KeyStorage.TOKEN);
      localStorage.removeItem(KeyStorage.USER);
      this.state.next(false);
    }
  }

  public isAuthenticate(): boolean {
    if(!this.hasToken()) {
      return false;
    }

    if(!this.tokenIsFresh()) {
      this.logout();
      alert(`Session expirée`);
      return false;
    }

    return true;
  }

  public getToken(): string|null {
    if(isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(KeyStorage.TOKEN);
    }

    return null;
  }

  public getUser(): AuthenticateUser|undefined {
    if(isPlatformBrowser(this.platformId)) {
      return this.state ? JSON.parse(localStorage.getItem(KeyStorage.USER)!) : undefined;
    }

    return undefined;
  }

  public hasToken(): boolean {
    if(isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(KeyStorage.TOKEN) != null;
    }
    return false;
  }

  private tokenIsFresh(): boolean {
    const timestamp = Math.floor(Date.now() / 1000);
    const expiration = this.getTokenExpire();

    return expiration > timestamp;
  }

  private getTokenExpire(): number {
    const token = this.getToken();

    const payload = token?.split('.')[1];
    if(isPlatformBrowser(this.platformId)) {
      const data = JSON.parse(window.atob(payload!));
      return data.exp;
    }

    return 0
  }

}


