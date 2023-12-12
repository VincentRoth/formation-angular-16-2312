import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class TimeInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const startTime = Date.now();

    return next.handle(request).pipe(
      finalize(() => {
        const endTime = Date.now();
        console.log(
          `${request.method} ${request.url} a pris ${endTime - startTime}ms`
        );
      })
    );
  }
}
