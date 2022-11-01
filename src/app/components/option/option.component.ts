import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  @Input() imageSource: String = "Not found";
  @Input() database: any;

  constructor() { }

  ngOnInit(): void {
  }

}
