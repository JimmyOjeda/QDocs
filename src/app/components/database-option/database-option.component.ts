import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-database-option',
  templateUrl: './database-option.component.html',
  styleUrls: ['./database-option.component.css']
})
export class DatabaseOptionComponent implements OnInit {

  @Input() imageSource: String = "Not found";
  @Input() database: any;

  constructor() { }

  ngOnInit(): void {
  }

}
