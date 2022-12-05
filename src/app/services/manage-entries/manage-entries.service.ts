import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/model/response';

@Injectable({
    providedIn: 'root'
})
export class ManageEntriesService {

    private URL = 'http://localhost:5001/api/v1/entries';
    private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGE4ZGE2M2Y0ODQ3MzAzYjU1YjU3MCIsImlhdCI6MTY3MDAyNDYxNCwiZXhwIjoxNjcyNjE2NjE0fQ.yySnep25ZJmXGz13iJJpWDMcb-K6sDPQq14WmSAK-Zk"

    private reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
    });

    constructor(private http: HttpClient) { }

    readAllEntries(): Observable<Response> {
        return this.http.get<Response>(this.URL, {headers: this.reqHeader});
    }

    createEntries (dictionary_id: any, token: any): Observable<Response> {
        const body = {
            dictionary: dictionary_id,
            column: token.name,
            token: token.value
        }
        return this.http.post<any>(this.URL, body, { headers: this.reqHeader });
    }

}
