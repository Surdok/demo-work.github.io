import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AntMasterComponent } from './ant-master.component';

const routes: Routes = [
  {
    path: '',
    component: AntMasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntMasterRoutingModule { }
