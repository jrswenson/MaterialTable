import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormTableComponent } from './form-table/form-table.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'formTable', component: FormTableComponent },
  { path: 'userList', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
