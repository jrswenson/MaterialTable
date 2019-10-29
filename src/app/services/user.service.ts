import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<User[]>(url);
  }

  // getAllAsFormArray(): Observable<FormArray> {
  //   return this.getAll()
  //     .pipe(
  //       map(
  //         (users: User[]) => {
  //           const fgs = users.map(User.asFormGroup);
  //           return new FormArray(fgs);
  //         }
  //       )
  //     );
  // }
}
