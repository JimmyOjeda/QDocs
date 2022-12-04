import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/model/response';

@Injectable({
  providedIn: 'root'
})
export class ManageDictionariesService {

    private URL = 'http://localhost:5001/api/v1/dictionaries';
    private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGE4ZGE2M2Y0ODQ3MzAzYjU1YjU3MCIsImlhdCI6MTY3MDAyNDYxNCwiZXhwIjoxNjcyNjE2NjE0fQ.yySnep25ZJmXGz13iJJpWDMcb-K6sDPQq14WmSAK-Zk"

    private reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
    });

    constructor(private http: HttpClient) { }

    readAllDictionaries(): Observable<Response> {
        return this.http.get<Response>(this.URL, {headers: this.reqHeader});
    }

    createDictionary (dictionary: any): Observable<Response> {
        const body = {
            name: dictionary.name,
            database: dictionary.database,
        }
        return this.http.post<any>(this.URL, body, { headers: this.reqHeader });
    }

    readDictionary (id: number): Observable<Response> {
        return this.http.get<Response>(
            `${this.URL}/${id}`, {headers: this.reqHeader}
        );
    }

    updateDictionary (dictionary: any): Observable<Response> {
        const body = {
            name: dictionary.name,
            database: dictionary.database,
        }
        return this.http.put<any>(
            `${this.URL}/${dictionary.id}`, body, { headers: this.reqHeader }
        );
    }

    deleteDictionary (id: number) {
        return this.http.delete<Response>(
            `${this.URL}/${id}`, {headers: this.reqHeader}
        );
    }
}
