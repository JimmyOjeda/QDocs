/**
  * Servicio que permite interactuar con las conexiones de
  * bases de datos almacenadas en el backend.
  *
*/
import { ManageDictionariesService } from 'src/app/services/manage-dictionaries/manage-dictionaries.service';
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

    constructor(private http: HttpClient, private dictionariesService : ManageDictionariesService) { }

    /**
     * Realiza la lectura de todas las conexiones a bases de datos
     * almacenadas en el backend mediante el consumo del endpoint
     * proveído por el mismo.
     *
     * @return Observable<Response> Un observable de la respuesta del
     * backend, la cual contiene las conexiones de bases de datos almacenadas.
    */
    readAllDatabases(): Observable<Response> {
        return this.http.get<Response>(this.URL, {headers: this.reqHeader});
    }

    /**
     * Crea una nueva conexión a base de datos en el backend.
     *
     * @param database Un objeto con la configuración de la conexión a
     * base de datos a crear.
     * @return Observable<Response> Un observable de la respuesta del
     * backend, la cual contiene la conexión de bases de datos creada.
    */
    createDatabase (database: Database): Observable<Response> {
        const body = {
            name: database.name,
            url: database.direction,
            username: database.user,
            password: database.password
        }
        return this.http.post<any>(this.URL, body, { headers: this.reqHeader });
    }

    /**
     * Realiza una consulta de una configuacion a base de datos en el backend.
     *
     * @param id El id de la conexión a base de datos a consultar.
     * @return Observable<Response> Un observable de la respuesta del
     * backend, la cual contiene la configuración de la conexión consultada.
    */
    readDatabase (id: string): Observable<Response> {
        return this.http.get<Response>(`${this.URL}/${id}`, {headers: this.reqHeader});
    }

    /**
     * Realiza una actualización de una configuacion a base de datos en el backend.
     *
     * @param database La información nueva de la configuración
     * de base de datos por actualizar.
     * @return Observable<Response> Un observable de la respuesta del
     * backend, la cual contiene la configuración de la conexión actualizada.
    */
    updateDatabase (database: Database): Observable<Response> {
        const body = {
            name: database.name,
            url: database.direction,
            username: database.user,
            password: database.password
        }
        return this.http.put<any>(`${this.URL}/${database.id}`, body, { headers: this.reqHeader });
    }

    /**
     * Realiza la eliminación de una configuacion a base de datos en el backend.
     *
     * @param id El id de la conexión a base de datos a eliminar.
    */
    deleteDatabase (id: number) {
        return this.http.delete<Response>(`${this.URL}/${id}`, {headers: this.reqHeader});
    }

    /**
     * Realiza una consulta de los registro de la tabla asociada
     * a una base de datos en el backend.
     *
     * @param database El id de la conexión a base de datos a consultar.
     * @return Observable<Response> Un observable de la respuesta del
     * backend, la cual contiene la configuración de la conexión consultada.
    */
    getRecords (database : String) : Observable<Response> {
        return this.http.get<Response>(`${this.URL}/${database}/records`, {headers: this.reqHeader});
    }

}
