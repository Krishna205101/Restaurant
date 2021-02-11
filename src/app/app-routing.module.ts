import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'layout',
    loadChildren: './layout/layout.module#LayoutPageModule'
  },
  {
    path: 'admindashboard',
    loadChildren: () => import('./admindashboard/admindashboard.module').then( m => m.AdmindashboardPageModule)
  },
  {
    path: 'textarea',
    loadChildren: () => import('./textarea/textarea.module').then( m => m.TextareaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
