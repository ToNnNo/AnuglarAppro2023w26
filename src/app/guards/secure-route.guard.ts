import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { AuthenticatorService } from "../security/authenticator.service";

export const secureRouteGuard: CanActivateFn = (route, state) => {

  const authenticator = inject(AuthenticatorService);
  const router: Router = inject(Router);

  if( !authenticator.isAuthenticate() ) {
    return router.parseUrl('/login');
  }

  return authenticator.isAuthenticate();
};
