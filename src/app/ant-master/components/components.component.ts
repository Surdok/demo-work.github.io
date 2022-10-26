import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule,
    NzProgressModule,
    NzStepsModule,
    NzDividerModule
  ],
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
