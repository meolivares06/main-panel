import { MyTabItem } from '../../core/MyTabItem';
import { Component, Input, OnInit } from '@angular/core';
import {CellResizeEvent} from '@healthcatalyst/cashmere';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

export interface ColumnModel {
    title: string;
    width: number;
    minWidth: number;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() data: any;

  columnObjects: ColumnModel[] = [
    {title: 'No.', width: 200, minWidth: 40},
    {title: 'Name', width: 328, minWidth: 70},
    {title: 'Weight', width: 200, minWidth: 60},
    {title: 'Symbol', width: 200, minWidth: 60}
];
displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
dataSource: PeriodicElement[] = [];

totalPositions: string = 'Totals';
totalNames = 0;
totalWeight = 0;
totalSymbols = 'N/A';

isResizing = false;

columnResized(column: number, cellChange: CellResizeEvent): void {
    const sizeChange = this.columnObjects[column].width - cellChange.width;
    const direction = cellChange.directionLeft ? -1 : 1;

    if (
        cellChange.width >= this.columnObjects[column].minWidth &&
        this.columnObjects[column + direction].width + sizeChange >= this.columnObjects[column + direction].minWidth
    ) {
        this.columnObjects[column + direction].width += sizeChange;
        this.columnObjects[column].width = cellChange.width;
    }
}
  constructor() {

  }

  ngOnInit(): void {
    const ELEMENT_DATA = [...this.data.data];
    this.dataSource = ELEMENT_DATA;

    this.totalPositions = 'Totals';
    this.totalNames = ELEMENT_DATA.length;
    this.totalWeight = ELEMENT_DATA.reduce((sum, el) => sum + el.weight, 0);
    console.log("🚀 ~ file: grid.component.ts ~ line 37 ~ GridComponent ~ data", this.data);
  }

}
