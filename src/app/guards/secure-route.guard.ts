import { CanActivateFn } from '@angular/router';
import { inject } from "@angular/core";
import { AuthenticatorService } from "../security/authenticator.service";

export const secureRouteGuard: CanActivateFn = (route, state) => {

  const authenticator = inject(AuthenticatorService);

  return authenticator.isAuthenticate();
};
