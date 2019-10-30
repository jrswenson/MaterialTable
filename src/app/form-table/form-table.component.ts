import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ColumnDefinition, CellType } from './column-definition';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: []
})
export class FormTableComponent implements OnInit {
  @Input() dataInput: BehaviorSubject<MatTableDataSource<any>>;
  @Input() columns: Array<ColumnDefinition>;
  dataSource: MatTableDataSource<any>;
  form: FormGroup;

  displayedColumns: Array<string>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataInput.subscribe((d) => {
      if (d) {
        this.dataSource = d;
        const formGroups = this.dataSource.data.map(d => d.formGroup);
        this.form = this.formBuilder.group({
          rows: this.formBuilder.array(formGroups)
        });
      }
    });

    this.displayedColumns = this.columns.map(m => m.identifier);
  }
}
