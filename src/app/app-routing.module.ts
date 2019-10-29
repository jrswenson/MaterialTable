import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormTableComponent } from './form-table/form-table.component';

const routes: Routes = [
  { path: 'formTable', component: FormTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
