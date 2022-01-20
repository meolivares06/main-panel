export interface Tab {
  id: string;
  title: string;
}
export interface PanelConfig extends Tab {
  width: number | undefined;
  height: number | undefined;
}

export interface GridConfig extends PanelConfig {
  fields: string[];
}
