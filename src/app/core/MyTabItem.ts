import { MyTab } from '../models/tab';
import { Type } from '@angular/core';
import { ITab } from '../models/panel.config';

export class MyTabItem{
  constructor(public component: Type<any>, public data: any) {}
}
