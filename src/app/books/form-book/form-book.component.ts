import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { book } from '../books.model';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css']
})
export class FormBookComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form!: FormGroup

  @Input()
  model!: book

  @Output()
  onSaveChanges = new EventEmitter<book>();
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [''],
      isbn: '',
      totalPages: '',
      publishedDate: '',
      rating: '',
      genresIds: '',
      publishersIds: '',
      authors: ''
    });

    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){

    this.onSaveChanges.emit(this.form.value);
  }


}
