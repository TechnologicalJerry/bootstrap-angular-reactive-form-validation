import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login-pages',
    loadChildren: () => import('./home-pages/home-pages.module').then(module => module.HomePagesModule)
  },
  {
    path: 'dashboard-pages',
    loadChildren: () => import('./dashboard-pages/dashboard-pages.module').then(module => module.DashboardPagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
