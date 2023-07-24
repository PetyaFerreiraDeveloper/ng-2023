import { Injectable, inject } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ITheme } from '../../shared/interfaces';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
class ThemeResolverService {
  constructor(private apiService: ApiService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ITheme> | null {
    const themeId = route.params['id'];
    if (!themeId) {
      this.router.navigate(['/theme/recent']);
      return null;
    }
    return this.apiService.loadTheme(themeId);
  }
}

export const ThemeResolver: ResolveFn<any>= (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<ITheme> | null => {
    return inject(ThemeResolverService).resolve(route, state)
};
