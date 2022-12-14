 /**
  * Servicio que permite al sistema obtener datos de la API de calendario.
  *
  * @author Alejandro Torre
  */

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Holiday } from "src/app/model/calendar/holiday";
import { Observable } from "rxjs";

const HOLIDAY_API_KEY = 'ce534396-b516-4618-84b0-5bb8032e9183';
const COUNTRY_CODE = 'MX';

@Injectable({
    providedIn: 'root'
})
export class HolidaysService{

    constructor(private http: HttpClient){}

     /**
      * Consume la API que peremite obtener datos del calendario.
      *
      * @return Observable<any> si se obtiene un respuesta 200 ok desde la API.
      */
    fetchHolidays(): Observable<any> {
      return this.http
      .get<{ holidays: Holiday[] }>('https://holidayapi.com/v1/holidays', {
        params: {
          country: COUNTRY_CODE,
          year: String(new Date().getFullYear() - 1),
          key: HOLIDAY_API_KEY,
          language: 'es'
        },
      });
    }

}
