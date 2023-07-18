import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css']
})
export class FormBookComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
bookform!:FormGroup 
  ngOnInit(): void {
    this.bookform = this.fb.group({
      title: FormControl,
      price:FormControl,
      ISbn:FormControl,
      date:FormControl

    })
  }

}
