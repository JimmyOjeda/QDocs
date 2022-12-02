import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchDefinitionService {

  private dictionaryApi = "https://es.wikipedia.org/w/api.php?";

  constructor(public http: HttpClient) { }

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
