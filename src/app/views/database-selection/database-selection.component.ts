import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookModel } from 'src/app/models/BookModel';
import { ManageBooksService } from 'src/app/services/manage-books/manage-books.service';
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

  private URL = "https://www.googleapis.com/books/v1/volumes?q=''&maxResults=8";

  books: Array<BookModel>

  constructor(private bookService: ManageBooksService) { }

  ngOnInit(): void {
    this.bookService.getBooks(this.URL).subscribe(async data => {
        this.books = await data.items;
    });
  }


}
