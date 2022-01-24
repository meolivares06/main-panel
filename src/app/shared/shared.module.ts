import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashmereModule } from '../cashmere/cashmere.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CashmereModule
  ],
  exports: [
    CommonModule,
    CashmereModule
  ]
})
export class SharedModule { }
