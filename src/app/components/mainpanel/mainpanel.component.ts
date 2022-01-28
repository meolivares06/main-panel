import { TabChildsService } from './../../core/tab-childs.service';
import { Panel } from '../../models/panel';
import { MyTabItem } from '../../core/MyTabItem';
import { AnchorDirective } from '../../core/anchor.directive';
import { Component, OnInit, ViewChild } from '@angular/core';
import {HcTabTitleComponent, TabChangeEvent, TabComponent} from '@healthcatalyst/cashmere';
import { GridComponent } from '../grid/grid.component';
import { PanelComponent } from '../panel/panel.component';
import { AccordionComponent } from '../accordion/accordion.component';

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
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'}
];

const componentList = {
  GridComponent,
  PanelComponent,
  AccordionComponent
}
// const getComponentClass = (componentName: string | number): unknown => {
//   return componentList[componentName] as typeof componentName;
// }

type configDirective = {
  typeComponent: string;
  data: {
    title: string,
    data: PeriodicElement[],
    some: string
  }
}
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
  componentList = componentList;
  constructor(private tabChildsService: TabChildsService) {
    this.setTabChilds();
  }

  ngOnInit(): void {}

  setTabChilds(): void {
    this.itemList = [...this.tabChildsService.getTabChilds()];
  }

  onAddNewTabGrid(): void {
    const config: configDirective = {
      typeComponent: 'GridComponent',
      data: {
        title: 'MyGridTabItem',
        data: [...ELEMENT_DATA],
        some: 'Some Grid Config'
      }
    }
    this.tabChildsService.addNewTab(config);
    this.setTabChilds();
  }

  onAddNewTabPanel(): void {
    this.itemList = [...this.itemList, new MyTabItem(componentList['PanelComponent'], { title: 'MyPanelTabItem', some: 'Some Panel Config' })];
  }

  onAddNewTabAcc(): void {
    this.itemList = [...this.itemList, new MyTabItem(componentList['AccordionComponent'], { title: 'MyAccTabItem', some: 'Some Panel Config' })];
  }

  selectionChanged(event: TabChangeEvent): void {
    this.selectedIndex = event.index;
  }

  addTask(event: Partial<MouseEvent>): void {
      console.log('The "Add Task" tab was clicked.');
      console.log('Click event', event);
  }




}
