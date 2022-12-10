import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {


    constructor(
        private loginService: LoginService,
        private router: Router,
        private cookieService: CookieService
    ) { }

    ngOnInit(): void {
        this.loginService.loadLogin();
    }

     /**
     * Redirecciona al usuario a su inicio correspondiente.
    */
    redirectHome () {
        switch(this.loginService.role) {
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
