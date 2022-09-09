import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let user = this.authService.userValue();
      if (user && user.token) {
        req = req.clone({ headers: req.headers.set('Authorization', `Bearer ${user.token}`) });
      }

      return next.handle(req);
  }
  constructor(private authService: AuthService) { }
}
