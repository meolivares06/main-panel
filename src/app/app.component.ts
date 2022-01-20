import { GridPanel } from './models/grid-panel';
import { Panel } from './models/panel';
import { MainPanel } from './models/main-panel';
import { Component, OnInit } from '@angular/core';
import { Tab } from './models/tab';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mainpanel';

  mainPanel: MainPanel;
  tabList: Array<Tab> = [];
  selectedTab: Tab | null = null;

  tmp: any;
  constructor() {
    this.mainPanel = new MainPanel();
  }
  ngOnInit(): void {
    this.setTabList();
  }

  setTabList(): void {
    this.tabList = this.mainPanel.getTabList();
  }

  setSelectedTab(): void {
    this.selectedTab = this.mainPanel.getSelectedTab();
  }

  onAddTab(): void {
    const tab = new Tab();
    tab.setTitle('Tab: ' + this.mainPanel.getTabList().length);
    this.mainPanel.addTab(tab);
    this.setTabList();
  }

  onAddPanel(): void {
    const tab = new Panel();
    tab.setTitle('Panel: ' + this.mainPanel.getTabList().length);
    this.mainPanel.addTab(tab);
    this.setTabList();
  }

  onAddGrid(): void {
    const tab = new GridPanel();
    tab.setTitle('Grid: ' + this.mainPanel.getTabList().length);
    this.mainPanel.addTab(tab);
    this.setTabList();
  }

  onSelectTab(id: string): void {
    this.selectedTab = this.tabList.filter((t: Tab) => t.getId() === id)[0];
  }

  onDeleteTab(): void {
    this.mainPanel.deleteTabById(this.tmp);
    this.setTabList();
  }
}
