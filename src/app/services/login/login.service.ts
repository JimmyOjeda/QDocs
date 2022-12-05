import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private router:Router, private cookieService: CookieService) {}

    token: string;
    role: string;

    ngOnInit(): void {
        if (this.cookieService.check('tokenCookie')) {
            this.loadLoginDummy(this.cookieService.get('tokenCookie'));
        }
    }

    login (email: string, password: string) {
        const res = this.loginBackendDummy(email, password);
        if(res.auth){
            this.token = res.token;
            this.cookieService.set("tokenCookie",this.token);
            this.role = res.role;
            this.redirect(res.role);
        }
    }

    getToken () {
        return this.cookieService.get("tokenCookie");
    }

    logout () {
        this.token="";
        this.cookieService.delete("tokenCookie");
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

    loginBackendDummy (email: string, password: string) {
        let res = this.getResponseDummy();
        if (email == "jimmy@qdocs.com") {
            res.role = "admin"
        }
        return res;
    }

    loadLoginDummy (token: string) {
        let res = this.getResponseDummy();
        this.token = res.token;
        this.role = res.role;
    }

    getResponseDummy () {
        let res = {
            auth: true,
            token: "nuevotokensito",
            role: "agent"
        }
        return res;
    }
}
