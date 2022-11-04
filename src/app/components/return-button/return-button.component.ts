import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-return-button',
  templateUrl: './return-button.component.html',
  styleUrls: ['./return-button.component.css']
})
export class ReturnButtonComponent implements OnInit {

  @Input() href = '/';

  constructor() { }

  ngOnInit(): void {
  }

}
