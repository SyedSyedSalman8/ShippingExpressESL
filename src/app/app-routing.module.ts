import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'query',
    loadChildren: () => import('./query/query.module').then( m => m.QueryPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'exchange',
    loadChildren: () => import('./exchange/exchange.module').then( m => m.ExchangePageModule)
  },
  {
    path: 'rates',
    loadChildren: () => import('./rates/rates.module').then( m => m.RatesPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./tools/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./tools/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./tools/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./tools/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./tools/calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
  {
    path: 'tracking',
    loadChildren: () => import('./tracking/tracking.module').then( m => m.TrackingPageModule)
  },
  {
    path: 'tandc',
    loadChildren: () => import('./tools/tandc/tandc.module').then( m => m.TandcPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
