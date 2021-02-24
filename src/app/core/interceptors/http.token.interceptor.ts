import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environment';
import { AuthenticationService } from '@core/services';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isApiUrl = request.url.startsWith(environment.baseUrl);
    if (isApiUrl) {
      request = request.clone({
        setHeaders: {
          // Authorization: `Bearer ${this.authenticationService.getToken()}`,
        },
      });
    }

    return next.handle(request);
  }
}
