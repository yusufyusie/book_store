import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateBookComponent } from './books/create-book/create-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';


const routes: Routes = [
  {path: 'books/create', component: CreateBookComponent},
  {path: 'books/edit/:id', component: EditBookComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
