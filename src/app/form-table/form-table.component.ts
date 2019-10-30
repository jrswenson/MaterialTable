import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ColumnDefinition } from './column-definition';
import { BehaviorSubject } from 'rxjs';
import { FormTableRow } from './form-table-row';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss']
})
export class FormTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  @Input() dataInput: BehaviorSubject<Array<FormTableRow>>;
  @Input() columns: Array<ColumnDefinition>;

  dataSource: MatTableDataSource<FormTableRow> = new MatTableDataSource([]);
  form: FormGroup;

  displayedColumns: Array<string>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataInput.subscribe((data) => {
      if (data) {
        const formGroups = data.map(d => d.formGroup);
        this.form = this.formBuilder.group({
          rows: this.formBuilder.array(formGroups)
        });

        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });

    this.displayedColumns = this.columns.map(m => m.identifier);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
