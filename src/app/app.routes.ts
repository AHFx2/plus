import { Routes } from '@angular/router';
import { PricingPage } from './pages/pricing-page/pricing-page';
import { LandingPage } from './pages/landing-page/landing-page';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage,
  },
  {
    path: 'pricing',
    component: PricingPage,
  },
];
