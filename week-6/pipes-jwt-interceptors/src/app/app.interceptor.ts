import { Injectable, Provider } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

import {environment} from 'src/environments/environment.development';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const apiURL = environment.apiURL;
    let request = req;

    if (req.url.startsWith('/api')) {
      request = req.clone({
        url: req.url.replace('/api', apiURL),
      });
    }
    return next.handle(request).pipe(
      tap((request) => {
        if (request instanceof HttpResponse) {
          console.log(request.body);
        }
      }),
      catchError((err) => {
        if (err.status === 0) {
          console.log('unknown error');
          return []
        }

        return [err];
      })
    );
  }
}

export const AppInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true,
};
