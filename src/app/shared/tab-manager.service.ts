
import { Injectable } from '@angular/core';
import { MyTab } from '../models/tab';
import { MyTabItem } from '../core/MyTabItem';

@Injectable({
  providedIn: 'root'
})
export class TabManagerService {
  private tabList: Array<MyTab | MyTabItem>;
  private selectedTab: MyTab | MyTabItem | null;

  constructor() {
    this.tabList = [];
    this.selectedTab = null;
  }

  setSelectedTab(tab: MyTab) {
    this.selectedTab = tab;
  }

  getSelectedTab(): MyTab | MyTabItem | null {
    return this.selectedTab;
  }

  getTabList(): Array<MyTab | MyTabItem> {
    return [...this.tabList];
  }

  addTab(newTab: MyTab | MyTabItem): MyTab | MyTabItem {
    this.tabList = [...this.tabList, newTab];
    return newTab;
  }

  // getTab(id: string): MyTab | MyTabItem {
  //   return this.tabList.filter((t: MyTab | MyTabItem) => t.data.title === id)[0];
  // }

  // getTabPosition(tab: MyTab): number {
  //   return this.tabList.findIndex((t: MyTab) => t.data.title === tab.getId());
  // }

  // deleteTabByIndex(index: number): void {
  //   this.tabList = [...this.tabList.slice(0, index), ...this.tabList.slice(index + 1)];
  // }

  // deleteTab(tab: Tab): void {
  //   this.tabList = [...this.tabList.filter((t: Tab) => t.data.title !== tab.getId())];
  // }

  // deleteTabById(id: string): void {
  //   this.tabList = [...this.tabList.filter((t: Tab) => t.data.title !== id)];
  // }
}
