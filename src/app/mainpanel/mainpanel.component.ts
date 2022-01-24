
import { Panel } from './../models/panel';
import { MyTabItem } from '../core/MyTabItem';
import { AnchorDirective } from '../core/anchor.directive';
import { Component, OnInit, ViewChild } from '@angular/core';
import {HcTabTitleComponent, TabChangeEvent, TabComponent} from '@healthcatalyst/cashmere';
import { GridComponent } from '../components/grid/grid.component';
import { PanelComponent } from '../components/panel/panel.component';
import { AccordionComponent } from '../components/accordion/accordion.component';

// Data for testing grid communicatino
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

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}
];
@Component({
  selector: 'app-mainpanel',
  templateUrl: './mainpanel.component.html',
  styleUrls: ['./mainpanel.component.scss']
})
export class MainpanelComponent implements OnInit {
  @ViewChild(AnchorDirective, {static: true}) adHost!: AnchorDirective;
  selectedIndex: number = 0;

  item: MyTabItem = new MyTabItem(GridComponent, { title: 'MyTabItem' })
  itemList: MyTabItem[] = []
  constructor() {}

  ngOnInit(): void {}


  onAddNewTabGrid(): void {
    this.itemList = [...this.itemList, new MyTabItem(GridComponent, {
      title: 'MyGridTabItem',
      data: [...ELEMENT_DATA],
      some: 'Some Grid Config'
    })];
  }

  onAddNewTabPanel(): void {
    this.itemList = [...this.itemList, new MyTabItem(PanelComponent, { title: 'MyPanelTabItem', some: 'Some Panel Config' })];
  }

  onAddNewTabAcc(): void {
    this.itemList = [...this.itemList, new MyTabItem(AccordionComponent, { title: 'MyAccTabItem', some: 'Some Panel Config' })];
  }

  selectionChanged(event: TabChangeEvent): void {
    this.selectedIndex = event.index;
  }

  addTask(event: Partial<MouseEvent>): void {
      console.log('The "Add Task" tab was clicked.');
      console.log('Click event', event);
  }




}
