import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CompanyComponent } from './Components/company/company.component';

const routes: Routes = [
  {path:"" , component : DashboardComponent},
  {path:"company" , component : CompanyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
