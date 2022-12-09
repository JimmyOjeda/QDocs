import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/model/response';
import { TemplatesResponse } from 'src/app/model/template/template-response';
import { Template } from 'src/app/model/template/template';
import { TemplateResponse } from 'src/app/model/template/templates-response';

@Injectable({
    providedIn: 'root'
})
export class ManageTemplatesService {

    private URL = 'http://localhost:5001/api/v1/templates';
    private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGE4ZGE2M2Y0ODQ3MzAzYjU1YjU3MCIsImlhdCI6MTY3MDAyNDYxNCwiZXhwIjoxNjcyNjE2NjE0fQ.yySnep25ZJmXGz13iJJpWDMcb-K6sDPQq14WmSAK-Zk"

    private reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
    });

    constructor(private http: HttpClient) { }

    readAllTemplates (): Observable<TemplatesResponse> {
        return this.http.get<TemplatesResponse>(this.URL, {headers: this.reqHeader});
    }

    createTemplate (template: any): Observable<Response> {
        console.log(template);
        let reqHeader = new HttpHeaders({
            //'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${this.token}`
        });
        let body = new FormData();
        body.append('dictionary', template.dictionary);
        body.append('name', template.name);
        body.append('file', template.file);
        return this.http.post<any>(this.URL, body, { headers: reqHeader });
    }

    readTemplate (id: string): Observable<TemplateResponse> {
        return this.http.get<TemplateResponse>(
            `${this.URL}/${id}`, {headers: this.reqHeader}
        );
    }

    updateTemplate (template: any): Observable<TemplateResponse> {
        const body = {
            name: template.name
        }
        return this.http.put<any>(
            `${this.URL}/${template._id}`, body, { headers: this.reqHeader }
        );
    }

    deleteTemplate (id: number) {
        return this.http.delete<Response>(
            `${this.URL}/${id}`, {headers: this.reqHeader}
        );
    }
}
