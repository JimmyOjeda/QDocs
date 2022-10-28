import { Component, OnInit, Output } from '@angular/core';
import { ToggleSidenavService } from 'src/app/services/toggle-sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor( public toggleSidenavService: ToggleSidenavService ) { }

  ngOnInit(): void {
    
  }
}
