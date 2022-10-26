import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AntMasterComponent } from './ant-master.component';

const routes: Routes = [
  {
    path: '',
    component: AntMasterComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent)
      },
      {
        path: 'components',
        loadComponent: () => import('./components/components.component').then(c => c.ComponentsComponent)
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntMasterRoutingModule { }
