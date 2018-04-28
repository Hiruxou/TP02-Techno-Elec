import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { LoginComponent } from './connection/login/login.component';
import { SigninComponent } from './connection/signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { BodyComponent } from './dashboard/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    LoginComponent,
    SigninComponent,
    DashboardComponent,
    LayoutComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
