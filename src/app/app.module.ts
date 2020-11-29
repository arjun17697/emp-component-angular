import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';   

import { AppComponent } from './app.component';
import { UserDemoComponent } from './component/user-demo/user-demo.component';

import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

import {HttpClientModule} from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { UserService } from 'src/service/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EmployeeComponent } from './component/employye/EmployeeComponent';


@NgModule({
  declarations: [
    AppComponent,
    UserDemoComponent,
    EmployeeComponent,
    PageNotFoundComponent,
    AddEmployeeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }