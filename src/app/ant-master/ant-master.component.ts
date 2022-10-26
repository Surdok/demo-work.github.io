import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';


@Component({
  selector: 'app-ant-master',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzBreadCrumbModule,
  ],
  templateUrl: './ant-master.component.html',
  styleUrls: ['./ant-master.component.scss'],

})
export class AntMasterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
