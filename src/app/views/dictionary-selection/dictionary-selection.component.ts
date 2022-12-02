import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageDictionariesService } from 'src/app/services/manage-dictionaries/manage-dictionaries.service';

@Component({
  selector: 'app-dictionary-selection',
  templateUrl: './dictionary-selection.component.html',
  styleUrls: ['./dictionary-selection.component.css']
})
export class DictionarySelectionComponent implements OnInit {

  imageSource = "../assets/Images/diccionarioblack.png";

  dictionaries: any = [];

  constructor(private router: Router, private dictionaryService: ManageDictionariesService) {}

  ngOnInit(): void {
    this.dictionaries = this.dictionaryService.readAllDictionaries();
  }

}
