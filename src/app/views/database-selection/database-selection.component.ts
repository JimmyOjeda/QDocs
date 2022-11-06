import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    port: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  lastOptionOpened: number = 0;
  modalTitle: string = "Crear conexión";

  constructor(
    public selectOptionService: SelectOptionService,
    public manageDatabasesService: ManageDatabasesService
  ) { }

  ngOnInit(): void {
  }

  createDatabaseConfiguration () {
    this.selectOptionService.optionSelected = -1;
    this.modalTitle = "Crear conexión";
    this.databaseForm.reset();
  }

  loadDatabaseData (id: number) {
    this.modalTitle = "Editar conexión";
    let database = this.manageDatabasesService.readDatabase(id);
    
    if(database){
      this.databaseForm.patchValue({
        name: database.name,
        direction: database.direction,
        port: database.port,
        user: database.user,
        password: database.password
      })
    }else{
      this.databaseForm.reset();
    }
  }

  saveDatabaseConfiguration() {
    let database = {
      id: this.selectOptionService.optionSelected,
      name: this.databaseForm.value.name!,
      direction: this.databaseForm.value.direction!,
      port: this.databaseForm.value.port!,
      user: this.databaseForm.value.user!,
      password: this.databaseForm.value.password!
    }
    this.manageDatabasesService.updateDatabase(database);
  }

  addDatabaseConfiguration() {
    this.manageDatabasesService.createDatabase({
      id: this.manageDatabasesService.readAllDatabases.length+1,
      name: this.databaseForm.value.name!,
      direction: this.databaseForm.value.direction!,
      port: this.databaseForm.value.port!,
      user: this.databaseForm.value.user!,
      password: this.databaseForm.value.password!
    });
    
  }

  removeDatabaseConfiguration () {
    this.manageDatabasesService.deleteDatabase(this.selectOptionService.optionSelected);    
  }

}
