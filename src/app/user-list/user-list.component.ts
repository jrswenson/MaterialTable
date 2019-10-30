import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { FormArray } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ColumnDefinition, CellType } from '../form-table/column-definition';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  dataSource: BehaviorSubject<Array<User>> = new BehaviorSubject(null);
  columns: Array<ColumnDefinition> = [
    {
      identifier: 'id',
      header: 'ID',
      cellType: CellType.INPUT,
      cellControl: (element: User) => element.idCtrl,
      cellPlaceHolder: 'Enter User Id'
    },
    {
      identifier: 'name',
      header: 'Name',
      cellType: CellType.PLAIN,
      cellControl: (element: User) => element.nameCtrl
    },
    {
      identifier: 'username',
      header: 'User Name',
      cellType: CellType.PLAIN,
      cellControl: (element: User) => element.userNameCtrl
    },
    {
      identifier: 'createDate',
      header: 'Created On',
      cellType: CellType.DATE,
      cellControl: (element: User) => element.createDateCtrl
    },
    {
      identifier: 'active',
      header: 'User Active',
      cellType: CellType.CHECKBOX,
      cellControl: (element: User) => element.activeCtrl
    },
    {
      identifier: 'description',
      header: 'Description',
      cellType: CellType.TEXTAREA,
      cellControl: (element: User) => element.userNameCtrl
    }
  ];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(rows => {
      rows = rows.map(row => new User(row));
      this.dataSource.next(rows);
    });
  }

}
