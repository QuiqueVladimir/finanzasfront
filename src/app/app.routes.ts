import { Routes } from '@angular/router';
import {HomePageComponent} from './public/pages/home-page/home-page.component';
import {LoginComponent} from './auth/pages/login/login.component';
import {RegisterComponent} from './auth/pages/register/register.component';
import {UserHomePageComponent} from './public/pages/user-home-page/user-home-page.component';
import {PageNotFoundComponent} from './public/pages/page-not-found/page-not-found.component';
import {PortfolioManagementComponent} from './invoice-letter-management/pages/portfolio-management/portfolio-management.component';
import {InvoiceListComponent} from './invoice-letter-management/pages/invoice-list/invoice-list.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomePageComponent},
  {path: '', component: UserHomePageComponent,
    children: [
      {path: '', component: PageNotFoundComponent},
      {path: 'dashboard', component: PageNotFoundComponent },
      {path: 'portfolios', component: PortfolioManagementComponent},
      {path: 'portfolios/:id', component: InvoiceListComponent}
    ]
  }
];
