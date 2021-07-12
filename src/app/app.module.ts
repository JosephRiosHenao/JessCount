import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StartedComponent } from './components/started/started.component';
import { NavbarSideComponent } from './components/navbar-side/navbar-side.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LandingPageComponent,
    LoginComponent,
    DashboardComponent,
    StartedComponent,
    NavbarSideComponent,
    GettingStartedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
