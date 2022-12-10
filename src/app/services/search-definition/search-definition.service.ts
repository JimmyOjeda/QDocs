/**
  * Servicio que permite consultar definiciones de diccionario.
  *
*/
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchDefinitionService {

  private dictionaryApi = "https://es.wikipedia.org/w/api.php?";

  constructor(private readonly http: HttpClient) { }

  /**
     * Realiza las búsquedas de palabras ingresadas por el usuario
     *
     * @param keyword será la palabra con la que se realizará la búsqueda
     * @return Observable<Response> Un observable de la respuesta de la API,
     * la cual contiene la defición de la palabra buscada.
    */
  search (keyword: string): Observable<any> {
    const params = {
      "action": "query",
      "format": "json",
      "list": "search",
      "formatversion": "2",
      "srsearch":"Que es un " + keyword,
      "srlimit": "1",
      "utf8" : '1',
      "origin": '*'
    };

    return this.http.get<any>(this.dictionaryApi,{params: params});
  }
}
