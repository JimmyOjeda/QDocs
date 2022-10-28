import { Component, OnInit } from '@angular/core';
import { ToggleSidenavService } from 'src/app/services/toggle-sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor( public toggleSidenavService: ToggleSidenavService) { }

  ngOnInit(): void {
  }

}
