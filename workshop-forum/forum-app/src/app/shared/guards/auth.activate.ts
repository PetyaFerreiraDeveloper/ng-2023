import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
class PermissionsService {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> {
    return this.authService.user$.pipe(
      take(1),
      map((user) => {
        const loginRequired = route.data['loginRequired'];
        if (loginRequired === undefined || !!user === loginRequired) {
          return true;
        }
        const returnUrl = route.url.map((u) => u.path).join('/');
        return !!user
          ? this.router.createUrlTree(['/theme/recent'], {
              queryParams: { returnUrl },
            })
          : this.router.createUrlTree([`/auth/login`], {
              queryParams: {
                returnUrl,
              },
            });
      })
    );
  }
}

export const AuthActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | UrlTree | Observable<boolean | UrlTree> => {
  return inject(PermissionsService).canActivate(route, state);
};
