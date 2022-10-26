import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService, Person } from 'src/app/services/data.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    CommonModule,
    AgGridModule,
    MatCardModule,
    MatDividerModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  cities = [
    {
      id: 1,
      name: 'Vilnius',
      avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
    },
    { id: 2, name: 'Kaunas', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
    {
      id: 3,
      name: 'Pavilnys',
      avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
    },
    {
      id: 4,
      name: 'Siauliai',
      avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
    },
  ];

  selectedCity = this.cities[2].name;

  rowData = Array.from(Array(10).keys()).map(r => ({
    Name: `Name${r}`,
    Age: `Age${r}`,
    Score: `Score${r}`,
    Goodness: `Goodness${r}`,
    Status: `Status${r}`,
  }));

  colDefs: (ColDef<TablesComponent['rowData'][number]> | ColGroupDef<TablesComponent['rowData'][number]>)[] = [
    {
      field: 'Name',
      headerName: 'Name'
    },
    {
      field: 'Age',
      headerName: 'Age'
    },
    {
      field: 'Score',
      headerName: 'Score'
    },
    {
      field: 'Goodness',
      headerName: 'Goodness'
    },
    {
      field: 'Status',
      headerName: 'Status'
    },
  ];
  defaultColDef: ColDef<{ Name: string; Age: string; Score: string; Goodness: string; Status: string; }> | undefined = {
    filter: true,
    // sort: 'asc',
    sortable: true
  };
  people: Person[] = [];
  selectedPeople: [string] = [''];

  selectedCompanies = '';
  companies: any[] = [];
  companiesNames = ['Uber', 'Microsoft', 'Flexigen'];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getPeople()
      .pipe(map(x => x.filter(y => !y.disabled)))
      .subscribe((res) => {
        this.people = res;
        this.selectedPeople = [this.people[0].id];
      });
    this.companiesNames.forEach((c, i) => {
      this.companies.push({ id: i, name: c });
    });
  }

  addTagFn(name: string) {
    return { name: name, tag: true };
  }

}
