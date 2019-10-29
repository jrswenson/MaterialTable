import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ColumnDefinition, CellType } from './column-definition';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: []
})
export class FormTableComponent implements OnInit {
  form: FormGroup;
  rows: Array<any> = []; // TODO: change any to an interface
  dataSource: MatTableDataSource<any>;

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

  displayedColumns: Array<string>;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      rows: this.formBuilder.array([])
    });

    // TODO: This should be moved to an input parameter(s)
    this.userService.getAll().subscribe(rows => {
      rows = rows.map(row => new User(row));
      const formGroups = rows.map(row => row.formGroup);
      this.form.setControl('rows', new FormArray(formGroups));
      this.dataSource = new MatTableDataSource(rows);
    });

    this.displayedColumns = this.columns.map(m => m.identifier);
  }
}
