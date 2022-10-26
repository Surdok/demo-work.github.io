import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'material',
    loadComponent: () => import('./material-master/material-master.component').then(c => c.MaterialMasterComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./material-master/dashboard/dashboard.component').then(c => c.DashboardComponent),
      },
      {
        path: 'tables',
        loadComponent: () => import('./material-master/tables/tables.component').then(c => c.TablesComponent),
      },
      // {
      //   path: 'charts',
      //   loadComponent: () => import('./material-master/charts/charts.component').then(c => c.ChartsComponent),
      // },
      { path: '**', redirectTo: 'dashboard' },

    ],
  }
  ,
  { path: 'ant', loadChildren: () => import('./ant-master/ant-master.module').then(m => m.AntMasterModule) }, {
    path: '**', redirectTo: 'material'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
