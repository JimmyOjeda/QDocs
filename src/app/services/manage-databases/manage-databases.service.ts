import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Database } from 'src/app/model/database/database';
import { Response } from 'src/app/model/response';


@Injectable({
  providedIn: 'root'
})
export class ManageDatabasesService {

    private URL = 'http://localhost:5001/api/v1/databases';
    private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGE4ZGE2M2Y0ODQ3MzAzYjU1YjU3MCIsImlhdCI6MTY3MDAyNDYxNCwiZXhwIjoxNjcyNjE2NjE0fQ.yySnep25ZJmXGz13iJJpWDMcb-K6sDPQq14WmSAK-Zk"

    private reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
    });

    databases: Database[] = [];

    constructor(private http: HttpClient) { }

    readAllDatabases(): Observable<Response> {
        return this.http.get<Response>(this.URL, {headers: this.reqHeader});
    }

    createDatabase (database: Database): Observable<Response> {
        const body = {
            name: database.name,
            url: database.direction,
            username: database.user,
            password: database.password
        }
        return this.http.post<any>(this.URL, body, { headers: this.reqHeader });
    }

    readDatabase (id: number): Observable<Response> {
        return this.http.get<Response>(`${this.URL}/${id}`, {headers: this.reqHeader});
    }

    updateDatabase (database: Database): Observable<Response> {
        const body = {
            name: database.name,
            url: database.direction,
            username: database.user,
            password: database.password
        }
        return this.http.put<any>(`${this.URL}/${database.id}`, body, { headers: this.reqHeader });
    }

    deleteDatabase (id: number) {
        return this.http.delete<Response>(`${this.URL}/${id}`, {headers: this.reqHeader});
    }

}
