import { Panel } from './../models/panel';
import { MyTabItem } from '../core/MyTabItem';
import { AnchorDirective } from '../core/anchor.directive';
import { Component, OnInit, ViewChild } from '@angular/core';
import {HcTabTitleComponent, TabChangeEvent, TabComponent} from '@healthcatalyst/cashmere';
import { GridComponent } from '../components/grid/grid.component';
import { PanelComponent } from '../components/panel/panel.component';


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
    this.itemList = [...this.itemList, new MyTabItem(GridComponent, { title: 'MyGridTabItem' })];
  }

  onAddNewTabPanel(): void {
    this.itemList = [...this.itemList, new MyTabItem(PanelComponent, { title: 'MyPanelTabItem' })];
  }

  selectionChanged(event: TabChangeEvent): void {
    this.selectedIndex = event.index;
  }

  addTask(event: Partial<MouseEvent>): void {
      console.log('The "Add Task" tab was clicked.');
      console.log('Click event', event);
  }




}
