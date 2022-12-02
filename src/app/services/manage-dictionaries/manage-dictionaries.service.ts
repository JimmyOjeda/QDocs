import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageDictionariesService {

  constructor() { }

    dictionaries = [
        {
            "title" : "Diccionario paises",
            "link" : "enlace"
        },
        {
            "title" : "Diccionario escuela",
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
