import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Database } from 'src/app/model/database/database';
import { Response } from 'src/app/model/response';

@Injectable({
  providedIn: 'root'
})
export class ManageDatabasesService {

    constructor(private http: HttpClient) { }

    private URL = 'http://localhost:5001/api/v1/databases';
      databases: Database[] = [];


    readAllDatabases (): Observable<Response> {
        // * Recomendación: dejar las mismas cabeceras para todas las peticiones
        // * (sin cambiar el token) para ser más veloces
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGE4ZGE2M2Y0ODQ3MzAzYjU1YjU3MCIsImlhdCI6MTY3MDAyNDYxNCwiZXhwIjoxNjcyNjE2NjE0fQ.yySnep25ZJmXGz13iJJpWDMcb-K6sDPQq14WmSAK-Zk'
        });
        return this.http.get<Response>(this.URL, {headers: reqHeader});
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
