import { Component, OnInit } from '@angular/core';
import { ManageDictionariesService } from 'src/app/services/manage-dictionaries/manage-dictionaries.service';
import { SelectOptionService } from 'src/app/services/select-option/select-option.service';

@Component({
  selector: 'app-dictionary-selection',
  templateUrl: './dictionary-selection.component.html',
  styleUrls: ['./dictionary-selection.component.css']
})
export class DictionarySelectionComponent implements OnInit {

    imageSource = "../assets/Images/diccionarioblack.png";

    dictionaries: any = [];

    constructor(private manageDictionariesService: ManageDictionariesService,
        private selectOptionService: SelectOptionService) {}

    ngOnInit(): void {
        this.loadAllDictionaries();
    }

    loadAllDictionaries() {
        this.manageDictionariesService.readAllDictionaries()
            .subscribe(
                response  => this.dictionaries = response.data,
                error => console.log(JSON.stringify(error))
            )
    }

    removeDictionary() {
        this.manageDictionariesService.deleteDictionary(this.selectOptionService.optionSelected)
            .subscribe(
                response => this.loadAllDictionaries(),
                error => console.log(JSON.stringify(error))
            )
    }

}
