import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { MainpanelComponent } from './components/mainpanel/mainpanel.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    {
        path: '',
        component: DashboardLayoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
