import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';



@Component({
  selector: 'app-ant-master',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,
    NzPageHeaderModule,
    RouterModule,
  ],
  templateUrl: './ant-master.component.html',
  styleUrls: ['./ant-master.component.scss'],

})
export class AntMasterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
