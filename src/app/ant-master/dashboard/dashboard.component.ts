import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    NzGridModule,
    NzCardModule,
    NzStatisticModule,
    NzProgressModule,
    NzTimelineModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
