/**
  * Servicio que permite interactuar con las entradas almacenadas en el backend.
  *
*/
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

    /**
     * Realiza la lectura de todas las entradas
     * almacenadas en el backend mediante el consumo del endpoint
     * proveído por el mismo.
     *
     * @return Observable<Response> Un observable de la respuesta del
     * backend, la cual contiene las entradas almacenadas.
    */
    readAllEntries(): Observable<Response> {
        return this.http.get<Response>(this.URL, {headers: this.reqHeader});
    }

    /**
     * Crea una nueva entrada en el backend.
     *
     * @param dictionary_id el id diccionario al cual estará asociado el token.
     * @param token el objeto que contiene el valor por el que será sustituirán
     * las palabras de la plantilla.
     * @return Observable<Response> Un observable de la respuesta del
     * backend, la cual contiene la entrada creada.
    */
    createEntries (dictionary_id: any, token: any): Observable<Response> {
        const body = {
            dictionary: dictionary_id,
            column: token.name,
            token: token.value
        }
        return this.http.post<any>(this.URL, body, { headers: this.reqHeader });
    }

}
