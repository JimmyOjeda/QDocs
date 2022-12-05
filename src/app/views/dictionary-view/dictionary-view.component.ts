import { Component, OnInit } from '@angular/core';
import { ManageDictionariesService } from 'src/app/services/manage-dictionaries/manage-dictionaries.service';
import { ManageEntriesService } from 'src/app/services/manage-entries/manage-entries.service';

@Component({
    selector: 'app-dictionary-view',
    templateUrl: './dictionary-view.component.html',
    styleUrls: ['./dictionary-view.component.css']
})
export class DictionaryViewComponent implements OnInit {

    dictionaries: any = [];
    entries: any = [];
    dictionaryIdSelected = '';

    constructor(
        private dictionaryService: ManageDictionariesService,
        private entryService: ManageEntriesService
    ) { }

    ngOnInit(): void {
        this.dictionaryService.readAllDictionaries()
        .subscribe(
            response => this.dictionaries = response.data,
            error => console.log(JSON.stringify(error))
        )
    }

    loadEntries() {
        this.entryService.readAllEntries()
        .subscribe(
            response => {
                this.entries = response.data.filter(
                    entry => entry.dictionary === this.dictionaryIdSelected
                );
            },
            error => console.log(JSON.stringify(error))
        )
    }
}
