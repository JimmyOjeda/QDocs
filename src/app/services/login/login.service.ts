import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/Login';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private URL = 'http://localhost:5001/api/v1/auth/login';

    private reqHeader = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(
        private router:Router, 
        private cookieService: CookieService,
        private http: HttpClient
    ) {}

    token: string;
    role: string;

    ngOnInit(): void {
        this.loadLogin();
    }

    login (email: string, password: string){
        this.backendLogin(email, password).subscribe(
            response => {
                if (response.success) {
                    this.token = response.token;
                    this.cookieService.set("tokenCookie",this.token);
                    this.role = 'agent' /*response.role*/;
                    this.cookieService.set("roleCookie", this.role);
                    this.redirect(this.role /*response.role*/);
                    console.log(response);
                }
            }
        )
    }

    loadLogin () {
        if (this.cookieService.check('tokenCookie') && this.cookieService.check('roleCookie')) {
            this.token = this.cookieService.get('tokenCookie');
            this.role = this.cookieService.get('roleCookie');
            this.redirect(this.role);
        }
    }

    backendLogin(email: string, password: string): Observable<Login> {
        const body = {
            email: email,
            password: password
        }
        return this.http.post<Login>(`${this.URL}`,body, {headers: this.reqHeader});
    }

    getToken () {
        return this.cookieService.get("tokenCookie");
    }

    logout () {
        this.token="";
        this.cookieService.delete("tokenCookie");
        this.cookieService.delete("roleCookie");
        this.router.navigate(['/']);
    }

    redirect (role: string) {
        switch(role) {
            case 'admin': {
                this.router.navigate(['/admin-home']);
                break;
            }
            case 'agent': {
                this.router.navigate(['/agent-home']);
                break;
            }
        };
    }
}
