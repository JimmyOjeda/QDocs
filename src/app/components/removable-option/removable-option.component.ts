import { Component, Input, OnInit } from '@angular/core';
import { SelectOptionService } from 'src/app/services/select-option/select-option.service';

@Component({
  selector: 'app-removable-option',
  templateUrl: './removable-option.component.html',
  styleUrls: ['./removable-option.component.css']
})
export class RemovableOptionComponent implements OnInit {

  @Input() imageSource: String = "Not found";
  @Input() option: any;

  constructor(public selectOptionService: SelectOptionService) { }

  ngOnInit(): void {
  }

  updateSelectedOption () {
    this.selectOptionService.updateSelectedOption(this.option._id);
  }

}
