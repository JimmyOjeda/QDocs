import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Database } from 'src/app/model/database/database';
import { ManageDatabasesService } from 'src/app/services/manage-databases/manage-databases.service';
import { SelectOptionService } from 'src/app/services/select-option/select-option.service';

@Component({
  selector: 'app-database-selection',
  templateUrl: './database-selection.component.html',
  styleUrls: ['./database-selection.component.css']
})
export class DatabaseSelectionComponent implements OnInit {

  imageSource = "../assets/Images/basededatosblack.png";

  databaseForm = new FormGroup({
    name: new FormControl('', Validators.required),
    direction: new FormControl('', Validators.required),
    table: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  modalTitle: string = "Crear conexión";

  databases: any = [];

  constructor(
    public selectOptionService: SelectOptionService,
    private manageDatabasesService: ManageDatabasesService
  ) { }

  ngOnInit(): void {
    this.loadAllDatabases();
  }

   /**
  * Consume una función del servicio de bases de datos y obtiene las bases
  * de datos del backend.
  */
  loadAllDatabases() {
    this.manageDatabasesService.readAllDatabases()
        .subscribe(
            response => this.databases = response.data,
            error => console.log(JSON.stringify(error))
        );
  }

   /**
  * Reinicia las configuraciones del formulario y el servicio de 
  * selección de opciones.
  */
  createDatabaseConfiguration () {
    this.modalTitle = "Crear conexión";
    this.databaseForm.reset();
    this.selectOptionService.optionSelected = -1;
  }

  /**
  * Utiliza el id de la base de datos seleccionada para realizar una consulta
  * al servicio de bases de datos y así poder mostrar su respectiva información.
  * @param id El nuevo título de la descripción.
  */
  loadDatabaseData (id: string) {
    this.modalTitle = "Editar conexión";
    this.databaseForm.reset();
    this.manageDatabasesService.readDatabase(id)
        .subscribe(
            (response: any) =>  {
                this.databaseForm.patchValue({
                    name: response.data.name,
                    direction: response.data.url,
                    table: response.data.table,
                    user: response.data.username,
                    password: response.data.password
                })
            },
            error => console.log(JSON.stringify(error))
        );
  }

  /**
  * Guarda los datos capturados en el formulario y genera una configuración
  * de base de datos.
  * Actualiza la base de datos con el id correspondiente.
  */
  saveDatabaseConfiguration() {
    let database = {
      id: this.selectOptionService.optionSelected,
      name: this.databaseForm.value.name,
      direction: this.databaseForm.value.direction,
      table: this.databaseForm.value.table,
      user: this.databaseForm.value.user,
      password: this.databaseForm.value.password
    }
    this.manageDatabasesService.updateDatabase(database)
        .subscribe(
            response => this.loadAllDatabases(),
            error => console.log(JSON.stringify(error))
        );
  }

   /**
  * Genera un objeto con la configuración de la base de datos a crear 
  * y utiliza una función del servicio de bases de datos para crearla.
  */
  addDatabaseConfiguration() {
    this.manageDatabasesService.createDatabase({
      id: this.manageDatabasesService.readAllDatabases.length+1,
      name: this.databaseForm.value.name!,
      direction: this.databaseForm.value.direction!,
      table: this.databaseForm.value.table!,
      user: this.databaseForm.value.user!,
      password: this.databaseForm.value.password!
    }).subscribe(
        response => this.loadAllDatabases(),
        error => console.log(JSON.stringify(error))
    );
  }

  /**
  * Utiliza el servicio de selección de opciones para saber qué 
  * base de datos eliminar, y procede a eliminarla.
  */
  removeDatabaseConfiguration () {
    this.manageDatabasesService.deleteDatabase(this.selectOptionService.optionSelected)
        .subscribe(
            reponse => this.loadAllDatabases(),
            error => console.log(JSON.stringify(error))
        );
  }

}
