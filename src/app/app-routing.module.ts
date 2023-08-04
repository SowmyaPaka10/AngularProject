import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './PAGES1/login/login/login.component';
import { Error404Component } from './PAGES1/error-404/error404/error404.component';
import { BlankComponent } from './PAGES1/Blank/blank/blank.component';
import { ProfileComponent } from './PAGES1/Profile/profile/profile.component';
import { DashboardComponent } from './PAGES1/Dashboard/dashboard/dashboard.component';
import { RegisterComponent } from './PAGES1/Register/register/register.component';
import { ContactComponent } from './PAGES1/Contact/contact/contact.component';
import { FAQComponent } from './PAGES1/F.A.Q/f.a.q/f.a.q.component';
import { AccountSettingsComponent } from './PAGES1/Account/account-settings/account-settings.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'error-404',component:Error404Component},
  {path:'blank',component:BlankComponent},
  {path:'profile',component:ProfileComponent},
  {path:'Dashboard',component:DashboardComponent},
  {path:'register',component:RegisterComponent},
  {path:'contact',component:ContactComponent},
  {path:'f.a.q',component:FAQComponent},
  {path:'Account',component:AccountSettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
