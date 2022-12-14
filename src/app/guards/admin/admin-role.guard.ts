import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminRoleGuard implements CanActivate {

    constructor(
        private cookieService: CookieService, 
        private router: Router, 
        private loginService: LoginService
    ){}

    /**
     * Permite realizar las comprobaciones necesarias para determinar
     * si una ruta es accesible para un usuario o no.
     *
    */
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        const cookie = this.cookieService.check('tokenCookie');
        if (!cookie) {
            this.router.navigate(['/']);
        }
        if (this.loginService.role != "admin") {
            this.router.navigate(['not-found']);
        }
        return cookie;
    }
  
}
