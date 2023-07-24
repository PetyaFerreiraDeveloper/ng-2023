import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
class PermissionsService {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const loginRequired = route.data['loginRequired'];
    if (
      loginRequired === undefined ||
      this.authService.isLoggedIn === loginRequired
    ) {
      return true;
    }
    const returnUrl = route.url.map((u) => u.path).join('/');
    return this.router.createUrlTree([`/auth/login`],
      {
        queryParams: {
          returnUrl,
        },
      },    
    );
  }
}

export const AuthActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | UrlTree => {
  return inject(PermissionsService).canActivate(route, state);
};
