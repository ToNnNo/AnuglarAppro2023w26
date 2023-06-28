import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import { AuthenticatorService } from "../../security/authenticator.service";

@Injectable()
export class AuthenticateInterceptor implements HttpInterceptor {

  constructor(private authenticator: AuthenticatorService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if( !request.url.startsWith(environment.staticUrlApi) ) {
      return next.handle(request);
    }

    if( !this.authenticator.hasToken() ) {
      return next.handle(request);
    }

    const authRequest = request.clone({
      headers: request.headers
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.authenticator.getToken()}`)
    });

    return next.handle(authRequest);
  }
}
