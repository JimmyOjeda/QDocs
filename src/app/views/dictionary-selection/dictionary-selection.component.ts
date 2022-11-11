import { Component, OnInit } from '@angular/core';
import { ManageBooksService } from 'src/app/services/manage-books/manage-books.service';

@Component({
  selector: 'app-dictionary-selection',
  templateUrl: './dictionary-selection.component.html',
  styleUrls: ['./dictionary-selection.component.css']
})
export class DictionarySelectionComponent implements OnInit {

    imageSource = "../assets/Images/diccionarioblack.png";

    private URL = "https://www.googleapis.com/books/v1/volumes?q=''";

    books: Array<any>;

    constructor(
        public bookService: ManageBooksService
    ) {}

    ngOnInit(): void {
        this.bookService.getBooks(this.URL).subscribe(data => {
            console.log(data);
        });
    }

}
