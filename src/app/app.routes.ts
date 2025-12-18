import { Routes } from '@angular/router';
import { PricingPage } from './pages/pricing-page/pricing-page';
import { LandingPage } from './pages/landing-page/landing-page';
import { CustomerstorisePage } from './pages/customerstorise-page/customerstorise-page';
import { BlogsPage } from './pages/blogs-page/blogs-page';
import { CustomerstoryComponent } from './pages/customerstorise-page/components/customerstory-component/customerstory-component';
import { BlogDetailsPage } from './pages/blogs-page/components/blog-details-page/blog-details-page';
import { FeaturesPage } from './pages/features-page/features-page';
import { SingupPage } from './pages/auth/singup-page/singup-page';

export const routes: Routes = [
  {
    path: '',
    component: SingupPage,
  },
    {
    path: 'signup',
    component: SingupPage,
  },
  {
    path: 'landing',
    component: LandingPage,
  },
  {
    path: 'pricing',
    component: PricingPage,
  },
  {
    path: 'customerstories',
    component: CustomerstorisePage,
  },
  { path: 'customerstory', component: CustomerstoryComponent },
  { path: 'blogs', component: BlogsPage },
  { path: 'blogdetails', component: BlogDetailsPage },
  { path: 'features', component: FeaturesPage },


];
