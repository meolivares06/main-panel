import { AccordionComponent } from './../components/accordion/accordion.component';
import { Injectable, Type } from '@angular/core';
import { GridComponent } from '../components/grid/grid.component';
import { MyTabItem } from './MyTabItem';
import { PanelComponent } from '../components/panel/panel.component';

// Data for testing grid communicatino
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'}
];



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

@Injectable({
  providedIn: 'root'
})
export class TabChildsService {
  list = [
    new MyTabItem(
      GridComponent,
      { title: 'Bombasto', data: [...ELEMENT_DATA], }
    ),
    new MyTabItem(
      PanelComponent,
      { title: 'Dr IQ', bio: 'Smart as they come' }
    ),
    new MyTabItem(
      AccordionComponent,
      { title: 'Hiring for several positions', body: 'Submit your resume today!' }
    )
  ]

  componentList: {
    [key:string]: any
  }

  constructor() {
    this.componentList = {
      GridComponent: GridComponent,
      PanelComponent: PanelComponent,
      AccordionComponent: AccordionComponent
    }

  }

  addNewTab(config: configDirective) {
    // configDirective: this shape to save in the state
    const {typeComponent, data} = config;
    const child = new MyTabItem(this.componentList[typeComponent], {...data});
    this.list = [...this.list, child];
  }

  getTabChilds() {
    return [...this.list];
  }
}
