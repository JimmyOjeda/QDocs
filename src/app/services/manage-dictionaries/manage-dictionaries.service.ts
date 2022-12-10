/**
  * Servicio que permite interactuar con los diccionarios
  *  almacenados en el backend.
  *
*/
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

    /**
     * Realiza la lectura de todas los diccionarios
     * almacenados en el backend mediante el consumo del endpoint
     * proveído por el mismo.
     *
     * @return Observable<Response> Un observable de la respuesta del
     * backend, la cual contiene los diccionarios almacenadas.
    */
    readAllDictionaries(): Observable<Response> {
        return this.http.get<Response>(this.URL, {headers: this.reqHeader});
    }

    /**
     * Crea un nuevo diccionario en el backend.
     *
     * @param dictionary Un objeto con la información del diccionario a crear.
     * @return Observable<Response> Un observable de la respuesta del
     * backend, la cual contiene el diccionario creado.
    */
    createDictionary (dictionary: any): Observable<Response> {
        const body = {
            name: dictionary.name,
            database: dictionary.database,
        }
        return this.http.post<any>(this.URL, body, { headers: this.reqHeader });
    }

    /**
     * Realiza una consulta de un diccionario en el backend.
     *
     * @param id El id del diccionario a consultar.
     * @return Observable<Response> Un observable de la respuesta del
     * backend, la cual contiene la configuración del diccionario consultada.
    */
    readDictionary (id: String): Observable<Response> {
        return this.http.get<Response>(
            `${this.URL}/${id}`, {headers: this.reqHeader}
        );
    }

    /**
     * Realiza una actualización de un diccionario en el backend.
     *
     * @param dictionary La información nueva de la configuración
     * de diccionario por actualizar.
     * @return Observable<Response> Un observable de la respuesta del
     * backend, la cual contiene la configuración de la conexión actualizada.
    */
    updateDictionary (dictionary: any): Observable<Response> {
        const body = {
            name: dictionary.name,
            database: dictionary.database,
        }
        return this.http.put<any>(
            `${this.URL}/${dictionary.id}`, body, { headers: this.reqHeader }
        );
    }

    /**
     * Realiza la eliminación de un diccionario en el backend.
     *
     * @param id El id del diccionario a eliminar.
    */
    deleteDictionary (id: number) {
        return this.http.delete<Response>(
            `${this.URL}/${id}`, {headers: this.reqHeader}
        );
    }
}
