import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { CommunityFundComponent } from './community-fund/community-fund.component';
import { LoansComponent } from './loans/loans.component';
import { SharesComponent } from './shares/shares.component';
import { ContributionsComponent } from './contributions/contributions.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'loans',
    component: LoansComponent
  },
  {
    path: 'shares',
    component: SharesComponent
  },
  {
    path: 'contributions',
    component: ContributionsComponent
  },
  {
    path: 'community-fund',
    component: CommunityFundComponent
  },
  {
    path: 'settings', // Changed from 'setting' to 'settings'
    component: SettingsComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
