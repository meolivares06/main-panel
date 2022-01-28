import { AppRoutingModule } from './app-rounting.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MainpanelComponent } from './components/mainpanel/mainpanel.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { AnchorDirective } from './core/anchor.directive';
import { PanelComponent } from './components/panel/panel.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpanelComponent,
    GridComponent,
    AnchorDirective,
    PanelComponent,
    AccordionComponent,
    DashboardLayoutComponent
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
