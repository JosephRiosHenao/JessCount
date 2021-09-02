import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ConfigComponent } from './components/config/config.component';
import { SalesComponent } from './components/sales/sales.component';
import { ProductsComponent } from './components/products/products.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},

  // With LogIn
  {path:'getting-started', component: GettingStartedComponent},
  {path:'home', component: HomeComponent},
  {path:'suppliers', component: SuppliersComponent},
  {path:'statistics', component: StatisticsComponent},  
  {path:'products', component: ProductsComponent},
  {path:'sales', component: SalesComponent},
  {path:'config', component: ConfigComponent},
  {path:'profile', component: ProfileComponent},
  {path:"welcome", component: WelcomeComponent},


  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
