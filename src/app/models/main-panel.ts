import { Tab } from "./tab";

export class MainPanel {
  private tabList: Array<Tab>;
  private selectedTab: Tab | null;

  constructor() {
    this.tabList = [];
    this.selectedTab = null;
  }

  setSelectedTab(tab: Tab) {
    this.selectedTab = tab;
  }

  getSelectedTab(): Tab | null {
    return this.selectedTab;
  }

  getTabList(): Array<Tab> {
    return [...this.tabList];
  }

  addTab(newTab: Tab): Tab {
    this.tabList = [...this.tabList, newTab];
    return newTab;
  }

  getTab(id: string): Tab {
    return this.tabList.filter((t: Tab) => t.getId() === id)[0];
  }

  getTabPosition(tab: Tab): number {
    return this.tabList.findIndex((t: Tab) => t.getId() === tab.getId());
  }

  deleteTabByIndex(index: number): void {
    this.tabList = [...this.tabList.slice(0, index), ...this.tabList.slice(index + 1)];
  }

  deleteTab(tab: Tab): void {
    this.tabList = [...this.tabList.filter((t: Tab) => t.getId() !== tab.getId())];
  }

  deleteTabById(id: string): void {
    this.tabList = [...this.tabList.filter((t: Tab) => t.getId() !== id)];
  }
}
