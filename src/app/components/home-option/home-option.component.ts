import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-option',
  templateUrl: './home-option.component.html',
  styleUrls: ['./home-option.component.css']
})
export class HomeOptionComponent implements OnInit {

  @Input() option: any;
  constructor() { }

  ngOnInit(): void {
  }

}
