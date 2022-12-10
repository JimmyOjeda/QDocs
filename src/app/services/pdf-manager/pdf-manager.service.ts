 /**
  * Servicio que realiza la obtención de archivos generados en el
  * backend.
  *
  * @author Jimmy Ojeda
  */

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfManagerService {

    private URL = 'http://localhost:5001/api/v1/templates';
    private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGE4ZGE2M2Y0ODQ3MzAzYjU1YjU3MCIsImlhdCI6MTY3MDAyNDYxNCwiZXhwIjoxNjcyNjE2NjE0fQ.yySnep25ZJmXGz13iJJpWDMcb-K6sDPQq14WmSAK-Zk"

    private reqHeader = new HttpHeaders({
        'Content-Type':  'application/pdf',
        'Authorization': `Bearer ${this.token}`
    });
    constructor(private http: HttpClient) { }

    /**
     * Realiza el consumo del endpoint de archivos para obtener
     * el archivo final generado.
     *
     * @param fileId El id del archivo almacenado en el backend.
     * @return Observable<ArrayBuffer> si se obtiene una respuesta 200 ok del servidor.
    */
    readFile (fileId: string, record: string) {
        return this.http.get(`${this.URL}/${fileId}/generate/${record}`, {headers: this.reqHeader, responseType: 'arraybuffer' });
    }
}
