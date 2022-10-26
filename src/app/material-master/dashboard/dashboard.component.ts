import { PieComponent } from './../../components/pie/pie.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    NgChartsModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    PieComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataSource = [
    { color: '#8bc34a', position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { color: 'rgb(244 133 54)', position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { color: '#9e9e9e', position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { color: '#607d8b', position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' }
  ];
  displayedColumns = ['position', 'name', 'weight', 'symbol'];

  feeds = [
    {
      icon: 'notifications',
      title: 'Pending tasks 3'
    },
    {
      icon: 'report',
      title: 'Activated 5 pilons'
    },
    {
      icon: 'emergency_home',
      title: 'Checked 90 viruses'
    },
    {
      icon: 'call_to_action',
      title: 'Actions to be taken : 89'
    },
  ];
  counts = [
    {
      count: 900,
      color: '#8bc34a',
      title: 'Done',
      icon: 'done',
    }
    , {
      count: 2500,
      color: 'rgb(244 133 54)',
      title: 'Unfinished',
      icon: 'dangerous',
    },
    {
      count: 45,
      color: '#9e9e9e',
      title: 'Pending',
      icon: 'pending',
    },
    {
      count: 987,
      color: '#607d8b',
      title: 'Unknown',
      icon: 'help',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
    }
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40];

    this.chart?.update();
  }

}
