import { Component, Input, OnInit } from '@angular/core';
import {SelectChangeEvent} from '@healthcatalyst/cashmere';
import { TileHeaderType } from '@healthcatalyst/cashmere/lib/tile/tile-header.directive';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
    headerType: TileHeaderType = 'blue';
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
    console.log("🚀 ~ file: grid.component.ts ~ line 37 ~ GridComponent ~ data", this.data);
  }

  typeChange(selectVal: SelectChangeEvent): void {
    this.headerType = selectVal.value;
}
}
