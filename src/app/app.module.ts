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
import { NavbarSideComponent } from './components/navbar-side/navbar-side.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ProductsComponent } from './components/products/products.component';
import { SalesComponent } from './components/sales/sales.component';
import { ConfigComponent } from './components/config/config.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingControlComponent } from './components/loading-control/loading-control.component';
import { AngularFireStorageModule } from "@angular/fire/storage";
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LandingPageComponent,
    LoginComponent,
    DashboardComponent,
    NavbarSideComponent,
    GettingStartedComponent,
    SuppliersComponent,
    StatisticsComponent,
    ProductsComponent,
    SalesComponent,
    ConfigComponent,
    ProfileComponent,
    NotFoundComponent,
    LoadingComponent,
    LoadingControlComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
