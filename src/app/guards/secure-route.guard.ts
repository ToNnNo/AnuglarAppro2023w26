import { CanActivateFn } from '@angular/router';

export const secureRouteGuard: CanActivateFn = (route, state) => {
  return false;
};
