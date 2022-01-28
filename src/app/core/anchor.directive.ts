import { Directive, Input, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';
import { GridComponent } from '../components/grid/grid.component';
import { ITab } from '../models/panel.config';
import { MyTabItem } from './MyTabItem';

@Directive({
  selector: '[myTabItem]'
})
export class AnchorDirective implements OnChanges {
  @Input() myTabItem: MyTabItem = new MyTabItem(GridComponent, {title: 'default title'});
  constructor(public viewContainerRef: ViewContainerRef) {
    console.log("🚀 ~ file: anchor.directive.ts ~ line 9 ~ AnchorDirective ~ constructor ~ viewContainerRef", this.myTabItem);
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    this.loadComponent();
  }
  loadComponent() {
    this.viewContainerRef.clear();

    const componentRef = this.viewContainerRef.createComponent<ITab>(this.myTabItem.component);
     componentRef.instance.data = this.myTabItem.data;
    // componentRef.instance.tabContent = '111';

  }
}
