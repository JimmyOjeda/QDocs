import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    constructor(private loginService: LoginService) { }

    ngOnInit(): void {
    }

     /**
     * Envia al servicio de login los datos que ingresó el usuario para acceder.
    */
    sendValues() {
        console.log(this.loginForm.value);
        this.loginService.login(this.loginForm.value.email,this.loginForm.value.password);
        this.loginForm.reset();
    }

}
