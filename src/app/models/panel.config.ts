export interface ITab {
  id: string;
  title: string;
  data?: any;
}
export interface PanelConfig extends ITab {
  width: number | undefined;
  height: number | undefined;
}

export interface GridConfig extends PanelConfig {
  fields: string[];
}
