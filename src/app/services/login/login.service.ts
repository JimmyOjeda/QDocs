 /**
  * Servicio que permite al sistema realizar el proceso de autenticación
  * mediante la comprobación de usuario usando un endpoint del backend.
  *
  * @author Jimmy Ojeda
  */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private URL = 'http://localhost:5001/api/v1/auth/login';

    private reqHeader = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    /**
     * Inicia los servicios necesarios para su correcto funcionamiento.
     *
    */
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

    /**
     * Realiza la comprobación de usuario mediante el uso de
     * la función backendLogin, genera las cookies necesarias
     * para la sesión local y guarda los datos retornados por la
     * función backendLogin.
     *
     * @param email El correo proporcionado por el usuario.
     * @param password La contraseña proporcionada por el usuario.
    */
    login (email: string, password: string){
        this.backendLogin(email, password).subscribe(
            response => {
                if (response.success) {
                    this.token = response.token;
                    this.cookieService.set("tokenCookie",this.token);
                    this.role = response.role;
                    this.cookieService.set("roleCookie", this.role);
                    this.redirect(this.role /*response.role*/);
                    console.log(response);
                }
            }
        )
    }

    /**
     * Carga la última sesión iniciada mediante la lectura de cookies
     * creadas en el login.
    */
    loadLogin () {
        if (this.cookieService.check('tokenCookie') && this.cookieService.check('roleCookie')) {
            this.token = this.cookieService.get('tokenCookie');
            this.role = this.cookieService.get('roleCookie');
            this.redirect(this.role);
        }
    }

    /**
     * Realiza el consumo del endpoint proveido por el backend
     * para realizar la autentación de usuario.
     *
     * @param email El email proporcionado por el usuario.
     * @param password La contraseña proporicionado por el usuario.
     * @return Observable<Login> Si obtiene una respuesta 200 ok del backend.
    */
    backendLogin(email: string, password: string): Observable<Login> {
        const body = {
            email: email,
            password: password
        }
        return this.http.post<Login>(`${this.URL}`,body, {headers: this.reqHeader});
    }

    /**
     * Finaliza la sesión local mediante la eliminación de las cookies
     * generadas en el Login.
    */
    logout () {
        this.token="";
        this.cookieService.delete("tokenCookie");
        this.cookieService.delete("roleCookie");
        this.router.navigate(['/']);
    }

    /**
     * Realiza una redirección mediante el uso de routerlink.
     * El usuario será redirigido al inicio correspondiente a su rol.
     *
     * @param titulo El rol del usuario a redirigir.
    */
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
