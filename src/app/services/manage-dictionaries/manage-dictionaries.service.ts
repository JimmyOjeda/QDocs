import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageDictionariesService {

  constructor() { }

    dictionaries = [
        {
            "title" : "QDOCS prueba",
            "link" : "enlace"
        },
        {
            "title" : "Diccionario 1",
            "link" : "enlace"
        },
        {
            "title" : "Option 1",
            "link" : "enlace"
        },
        {
            "title" : "Option 2",
            "link" : "enlace"
        }
    ]

    readAllDictionaries () {
        return this.dictionaries;
    }

    createDictionary (name: string) {
        this.dictionaries.push(
            {
                "title": name,
                "link": "enlace"
            }
        );
    }

    readDictionary(dictionary: any) {
        return this.dictionaries.find(aDictionary => aDictionary === dictionary);
    }

    updateDictionary (dictionary: any) {
        let oldDictionary = this.dictionaries.find(aDictionary => aDictionary === dictionary)!;
        this.dictionaries[this.dictionaries.indexOf(oldDictionary)] = dictionary;
    }

    deleteDictionary (index: number) {
        this.dictionaries.splice(index,1);
    }
}
