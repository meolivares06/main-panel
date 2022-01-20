import { Panel } from './panel';
import { GridConfig } from './panel.config';

export class GridPanel extends Panel {
  private gridConfig: Partial<GridConfig>;
  constructor() {
    super();
    this.gridConfig = {
      title: '',
      height: undefined,
      width: undefined,
      fields: []
    };
  }


}
