import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home-pages/home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('../home-pages/signup/signup.module').then(module => module.SignupModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../home-pages/login/login.module').then(module => module.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePagesRoutingModule { }
