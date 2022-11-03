import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-database-selection',
  templateUrl: './database-selection.component.html',
  styleUrls: ['./database-selection.component.css']
})
export class DatabaseSelectionComponent implements OnInit {

  imageSource = "../assets/Images/basededatosblack.png";
  databases = [
    {
      "id": 1,
      "title" : "Base de datos 01"
    },
    {
      "id": 2,
      "title" : "Base de datos 02"
    },
    {
      "id": 3,
      "title" : "Base de datos 03"
    },
    {
      "id": 4,
      "title" : "Base de datos 04"
    },
    {
      "id": 5,
      "title" : "Base de datos 05"
    }
  ];

  data = [
    {
        name: "BD1",
        direction: "192",
        port: "8080",
        user: "user1",
        password: "password1"
      
    },
    {
        name: "BD2",
        direction: "192",
        port: "8080",
        user: "user1",
        password: "password1"
      
    },
    {
        name: "BD3",
        direction: "192",
        port: "8080",
        user: "user1",
        password: "password1"
      
    },
    {
        name: "BD4",
        direction: "192",
        port: "8080",
        user: "user1",
        password: "password1"
      
    },
    {
        name: "BD5",
        direction: "192",
        port: "8080",
        user: "user1",
        password: "password1"
      
    }
  ]

  databaseForm = new FormGroup({
    name: new FormControl('', Validators.required),
    direction: new FormControl('', Validators.required),
    port: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  lastOptionOpened: number = 0;
  modalTitle: string = "Crear conexión";

  constructor() { }

  ngOnInit(): void {
  }

  createDatabaseConfiguration () {
    this.modalTitle = "Crear conexión";
    this.databaseForm.reset();
  }

  loadDatabaseData (id: number) {
    this.modalTitle = "Editar conexión";
    this.lastOptionOpened = id-1;
    let myId = id;

    this.databaseForm.patchValue({
      name: this.data[id-1].name,
      direction: this.data[id-1].direction,
      port: this.data[id-1].port,
      user: this.data[id-1].user,
      password: this.data[id-1].password
    })
  }

  saveDatabaseConfiguration() {
    this.data[this.lastOptionOpened] = {
      name: this.databaseForm.value.name!,
      direction: this.databaseForm.value.direction!,
      port: this.databaseForm.value.port!,
      user: this.databaseForm.value.user!,
      password: this.databaseForm.value.password!
    }
  }

}
