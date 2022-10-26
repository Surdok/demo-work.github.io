import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-material-master',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
  ],
  templateUrl: './material-master.component.html',
  styleUrls: ['./material-master.component.scss'],

})
export class MaterialMasterComponent implements OnInit {
  routesArray = [
    {
      path: 'dashboard',
      icon: 'dashboard',
      title: 'Dashboard'
    },
    {
      path: 'tables',
      icon: 'table_rows',
      title: 'Tables'
    },
    // {
    //   path: 'charts',
    //   icon: 'leaderboard',
    //   title: 'Charts'
    // },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
