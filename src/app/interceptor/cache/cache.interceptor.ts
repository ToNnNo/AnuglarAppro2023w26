import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  cache = new Map<string, HttpResponse<any>>();

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // test if not get/head => return request
    if( !['HEAD', 'GET'].includes(request.method) ) {
      next.handle(request);
    }

    // of(); // permet de créer un observable avec une valeur unique
    if( this.cache.has(request.url) ) {
      return of<HttpEvent<unknown>>(this.cache.get(request.url)!);
    }

    // .pipe pour capter la réponse du serveur
    return next.handle(request).pipe(
      tap( (event) => {
        if( event instanceof HttpResponse ) {
          this.cache.set(request.url, event);
        }
      })
    );
  }
}
