import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent} from './layout/header/header/header.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { DashboardComponent } from './PAGES1/Dashboard/dashboard/dashboard.component';
import { SidebarComponent } from './layout/sidebar/sidebar/sidebar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Error404Component } from './PAGES1/error-404/error404/error404.component';
import { BlankComponent } from './PAGES1/Blank/blank/blank.component';
import { LoginComponent } from './PAGES1/login/login/login.component';
import { from } from 'rxjs';
import { ProfileComponent } from './PAGES1/Profile/profile/profile.component';
import { FAQComponent } from './PAGES1/F.A.Q/f.a.q/f.a.q.component';
import { ContactComponent } from './PAGES1/Contact/contact/contact.component';
import { RegisterComponent } from './PAGES1/Register/register/register.component';
import { LinechartComponent } from './layout/linechart/linechart/linechart.component';
import { AccountSettingsComponent } from './PAGES1/Account/account-settings/account-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    Error404Component,
    BlankComponent,
    LoginComponent,
    ProfileComponent,
    FAQComponent,
    ContactComponent,
    RegisterComponent,
    LinechartComponent,
    AccountSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
