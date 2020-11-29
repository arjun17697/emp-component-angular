import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDemoComponent } from './component/user-demo/user-demo.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EmployeeComponent } from './component/employye/EmployeeComponent';


const routes: Routes = [

  {path:"demo",component:UserDemoComponent},
  {path:"add",component:AddEmployeeComponent},
  {path:"",component:EmployeeComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
