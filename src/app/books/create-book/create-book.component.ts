import { Component, OnInit } from '@angular/core';
import { book } from '../books.model';
import { Router } from '@angular/router';
import { BookService } from '../books.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(book: book){
    console.log(book);
    this.bookService.create(book).subscribe(id => {
      this.router.navigate(['/book/' + id]);
    })
  }

}
