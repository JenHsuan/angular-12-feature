import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BYPASS_ALERT } from '../http-token/http-token';

@Injectable()
export class PageInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (request.context.get(BYPASS_ALERT) === true) {
          return throwError(error)
        }
      
        if (error.status === 404) {
          alert("The proxy was not ready. Please try it later.")
        }
        return throwError(error)
      }
    ));
  }
}
