import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { ToggleSidenavService } from 'src/app/services/toggle-sidenav/toggle-sidenav.service';

@Component({
  selector: 'app-sidenav-builder',
  templateUrl: './sidenav-builder.component.html',
  styleUrls: ['./sidenav-builder.component.css']
})
export class SidenavBuilderComponent implements OnInit {

  constructor( 
    public toggleSidenavService: ToggleSidenavService,
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

}
