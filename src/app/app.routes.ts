import { Routes } from '@angular/router';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { guestGuard } from './core/guards/guest-guard';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    // Lazy-loaded standalone components with route guards
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: AuthLayout,
        canActivate: [guestGuard],
        children: [
            {
                path: 'login',
                loadComponent: () => import('./features/auth/components/login/login').then(c => c.Login)
            },
            {
                path: 'signup',
                loadComponent: () => import('./features/auth/components/signup/signup').then(c => c.Signup)
            }
        ]
    },
    {
        path: 'dashboard',
        component: DashboardLayout,
        canActivate: [authGuard],
        children: [
            {
                path: 'profile',
                loadComponent: () => import('./features/dashboard/components/component1/component1').then(c => c.Component1)
            },
            {
                path: 'analytics',
                loadComponent: () => import('./features/dashboard/components/component2/component2').then(c => c.Component2)
            },
            {
                path: 'settings',
                loadComponent: () => import('./features/dashboard/components/component3/component3').then(c => c.Component3)
            },
            {
                path: 'reports',
                loadComponent: () => import('./features/dashboard/components/component4/component4').then(c => c.Component4)
            },
            {
                path: '',
                loadComponent: () => import('./features/dashboard/components/component5/component5').then(c => c.Component5)
            }
        ]
    }
];
