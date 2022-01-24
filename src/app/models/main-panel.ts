import { MyTab } from "./tab";

export class MainPanel {
  private tabList: Array<MyTab>;
  private selectedTab: MyTab | null;

  constructor() {
    this.tabList = [];
    this.selectedTab = null;
  }

  setSelectedTab(tab: MyTab) {
    this.selectedTab = tab;
  }

  getSelectedTab(): MyTab | null {
    return this.selectedTab;
  }

  getTabList(): Array<MyTab> {
    return [...this.tabList];
  }

  addTab(newTab: MyTab): MyTab {
    this.tabList = [...this.tabList, newTab];
    return newTab;
  }

  getTab(id: string): MyTab {
    return this.tabList.filter((t: MyTab) => t.getId() === id)[0];
  }

  getTabPosition(tab: MyTab): number {
    return this.tabList.findIndex((t: MyTab) => t.getId() === tab.getId());
  }

  deleteTabByIndex(index: number): void {
    this.tabList = [...this.tabList.slice(0, index), ...this.tabList.slice(index + 1)];
  }

  deleteTab(tab: MyTab): void {
    this.tabList = [...this.tabList.filter((t: MyTab) => t.getId() !== tab.getId())];
  }

  deleteTabById(id: string): void {
    this.tabList = [...this.tabList.filter((t: MyTab) => t.getId() !== id)];
  }
}
