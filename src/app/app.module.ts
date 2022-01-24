import { AppRoutingModule } from './app-rounting.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MainpanelComponent } from './mainpanel/mainpanel.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { AnchorDirective } from './core/anchor.directive';
import { PanelComponent } from './components/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpanelComponent,
    GridComponent,
    AnchorDirective,
    PanelComponent
  ],
  imports: [
    BrowserModule, // run in the browser
    BrowserAnimationsModule,
    CommonModule, // ngIf, ngFor
    FormsModule, // ngModel
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
