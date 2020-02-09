import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentsModule } from '../app/students/student.module';
import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';

const routes:Route[]=[

  {
    path:'registration',component:RegistrationComponent,
  
  },
  {
    path:'login', component:LoginComponent,
    // canActivate:[AuthGuard],
  },
  {
    path:'logout', component:LogoutComponent,
    // canActivate:[AuthGuard],
  },
  {
    path:'',component:DashboardComponent,
    canActivate:[AuthGuard],
    children:[
      {path:'',component:HomeComponent},
      {path:'faculties',
   
        loadChildren:()=>import('./faculties/faculties.module').then(m=>m.FacultiesModule)
      },
      {path:'students',
        loadChildren:()=>import('../app/students/student.module').then(m=>m.StudentsModule)
      },
    ]
  },
  
  {path:'**',component:PageNotFoundComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
