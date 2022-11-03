import { Component, Input, OnInit } from '@angular/core';
import { ToggleSidenavService } from 'src/app/services/toggle-sidenav/toggle-sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() title = 'QDocs';

  constructor( public toggleSidenavService: ToggleSidenavService) { }

  ngOnInit(): void {
  }

}
