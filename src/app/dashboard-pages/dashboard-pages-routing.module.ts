import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
  },
  {
    path: 'employee-details',
    loadChildren: () => import('./employee-details/employee-details.module').then(module => module.EmployeeDetailsModule)
  },
  {
    path: 'user-details',
    loadChildren: () => import('./user-details/user-details.module').then(module => module.UserDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPagesRoutingModule { }
