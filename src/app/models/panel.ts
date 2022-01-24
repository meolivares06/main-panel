import { PanelConfig } from './panel.config';
import { MyTab } from './tab';
export class Panel extends MyTab {
  private panelConfig: Partial<PanelConfig>;

  constructor() {
    super();
    this.panelConfig = {
      title: '',
      width: undefined,
      height: undefined
    }
  }

  setPanelConfig(panelConfig: PanelConfig): void {
    this.panelConfig = panelConfig;
  }

  getPanelConfig(): Partial<PanelConfig> {
    if(undefined === this.panelConfig.width)
      throw new Error('No width was defind yet');
    if(undefined === this.panelConfig.height)
      throw new Error('No height was defind yet');
    return this.panelConfig;
  }

  setWidth(width: number): void {
    this.panelConfig.width = width;
  }

  setHeight(height: number): void {
    this.panelConfig.height = height;
  }
}
