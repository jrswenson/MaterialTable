import { AbstractControl } from '@angular/forms';

export class ColumnDefinition {
    // { columnDef: 'id', header: 'ID', cell: (element: any) => `<h1>${element.get('id').value}</h1>` },
    identifier: string;
    header: string;
    cellType: CellType;
    cellControl: (element: any) => AbstractControl;
    cellPlaceHolder?: string;
}

export enum CellType {
    PLAIN = 'PLAIN',
    INPUT = 'INPUT',
    TEXTAREA = 'TEXTAREA',
    CHECKBOX = 'CHECKBOX',
    DATE = 'DATE'
}
