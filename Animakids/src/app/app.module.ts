import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { LoginComponent } from './connection/login/login.component';
import { SigninComponent } from './connection/signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { BodyComponent } from './dashboard/body/body.component';
import { HeaderComponent } from './dashboard/layout/header/header.component';
import { MenuComponent } from './dashboard/body/menu/menu.component';
import { Jeu1Component } from './dashboard/body/jeu1/jeu1.component';
import { Jeu2Component } from './dashboard/body/jeu2/jeu2.component';
import { FooterComponent } from './dashboard/layout/footer/footer.component';
import { ScoreComponent } from './dashboard/body/score/score.component';

const appRoutes: Routes = [
  {
    path: 'connection',
    component: ConnectionComponent,
    data: { title: 'Connexion' }
  },
  { path: '',
    redirectTo: '/connection',
    pathMatch: 'full'
  },
  {
    path: 'inscription',
    component: SigninComponent,
    data: { title: 'Inscription Utilisateur' }
  },

  {path: 'dashboard', component : DashboardComponent,
  children:
  [{path:'', component: BodyComponent},
   {path:'body', component: BodyComponent},
   {path:'menu', component: MenuComponent},
   {path:'jeu1', component: Jeu1Component},
   {path:'jeu2', component: Jeu2Component},
   {path:'score', component: ScoreComponent},
   ]},
  { path: '**', component: ConnectionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    LoginComponent,
    SigninComponent,
    DashboardComponent,
    LayoutComponent,
    BodyComponent,
    HeaderComponent,
    MenuComponent,
    Jeu1Component,
    Jeu2Component,
    FooterComponent,
    ScoreComponent,
  ],
  imports: [
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),
  BrowserModule,
  FormsModule,
  HttpModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
