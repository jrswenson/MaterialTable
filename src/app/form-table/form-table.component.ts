import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ColumnDefinition } from './column-definition';
import { BehaviorSubject } from 'rxjs';
import { FormTableRow } from './form-table-row';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: []
})
export class FormTableComponent implements OnInit {
  @Input() dataInput: BehaviorSubject<MatTableDataSource<FormTableRow>>;
  @Input() columns: Array<ColumnDefinition>;

  dataSource: MatTableDataSource<FormTableRow>;
  form: FormGroup;

  displayedColumns: Array<string>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataInput.subscribe((data) => {
      if (data) {
        this.dataSource = data;
        const formGroups = this.dataSource.data.map(d => d.formGroup);
        this.form = this.formBuilder.group({
          rows: this.formBuilder.array(formGroups)
        });
      }
    });

    this.displayedColumns = this.columns.map(m => m.identifier);
  }
}
