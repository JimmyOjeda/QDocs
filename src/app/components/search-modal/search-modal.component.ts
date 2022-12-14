import { Component, OnInit, SecurityContext } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { tap } from 'rxjs';
import { SearchDefinitionService } from 'src/app/services/search-definition/search-definition.service';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.css']
})
export class SearchModalComponent implements OnInit {

  content: string;
  inputSearch = new FormControl('');

  constructor(public searchDefinition: SearchDefinitionService) {
    this.searchDefinition.search('Camino')
      .pipe(
        tap(res => console.log(res))
      ).subscribe(
        
      );
  }

  ngOnInit(): void {
  }

  /**
  * Consume el servicio de busqueda para mostrar las definiciones
  * de las palabras ingresadas por el usuario.
  */
  search () {
    this.searchDefinition.search(this.inputSearch.value)
    .pipe(
      tap(res => this.showResponse(res.query.search[0] ? res.query.search[0].snippet : "Sin resultados"))
    ).subscribe();
  }

  /**
  * Muestra al usuario en pantalla la respuesta obtenida por el servicio.
  *
  * @param response La respuesta obtenida del servicio.
  */
  showResponse (response: string) {    
    this.content = response.replace( /(<([^>]+)>)/ig, '');
  }

}
