import { Injectable } from '@angular/core';
import { Database } from 'src/app/model/database/database';

@Injectable({
  providedIn: 'root'
})
export class ManageDatabasesService {

  constructor() { }

  databases: Database[] = [
    {
      id:1,
      name: "Paises",
      direction: "192",
      port: "8080",
      user: "user1",
      password: "password1"

    },
    {
      id:2,
      name: "Escuela",
      direction: "192",
      port: "8080",
      user: "user1",
      password: "password1"

    }
  ];

  readAllDatabases () {
    return this.databases;
  }

  createDatabase (database: Database) {
    this.databases.push(database);
  }

  readDatabase (id: number) {
    return this.databases.find(aDatabase => aDatabase.id === id);
  }

  updateDatabase (database: Database) {
    let oldDatabase = this.databases.find(aDatabase => aDatabase.id === database.id)!;
    this.databases[this.databases.indexOf(oldDatabase)] = database;
  }

  deleteDatabase (id: number) {
    let database = this.databases.find(database => database.id === id)!;
    this.databases.splice(this.databases.indexOf(database),1);
  }


}
