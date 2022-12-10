import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { ToggleSidenavService } from 'src/app/services/toggle-sidenav/toggle-sidenav.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    @Input() title = 'QDocs';

    constructor( public toggleSidenavService: ToggleSidenavService, private loginService: LoginService) { }

    ngOnInit(): void {
    }

    /**
     * Inicia el servicio de Login para cerrar sesión y cerrar la barra lateral.
    */
    logout () {
        this.loginService.logout();
        this.toggleSidenavService.close();
    }

}
