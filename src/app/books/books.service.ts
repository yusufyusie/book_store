import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { book } from "./books.model";



@Injectable({
    providedIn: 'root'
  })
  export class BookService {
  
    constructor(private http: HttpClient) { }
    private apiURL = environment.apiURL + '/books';
    
    public create(book: book): Observable<number> {
        const formData = this.BuildFormData(book);
        return this.http.post<number>(this.apiURL, formData);
      }

      private BuildFormData(book: book): FormData {
        const formData = new FormData();
    
        formData.append('title', book.title);
        formData.append('isbn', book.isbn);
        formData.append('rating', String(book.rating));
        
        return formData;
      }
  }
  