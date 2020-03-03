import { Component, OnInit } from '@angular/core';

interface Employee {
  id?: number;
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: string;
}

const EMPLOYEES: Employee[] = [
  {
    name: 'Tiger Nixon',
    position: 'System Architect',
    office: 'Edinburgh',
    age: 61,
    startDate: "2011/04/25",
    salary: '$320,800'
  },
  {
    name: 'Garrett Winters',
    position: 'Accountant',
    office: 'Tokyo',
    age: 63,
    startDate: "2011/07/25",
    salary: '$170,750'
  },
  {
    name: 'Ashton Cox',
    position: 'Junior Technical Author',
    office: 'San Francisco',
    age: 66,
    startDate: "2009/01/12",
    salary: '$86,000'
  },
  {
    name: 'Cedric Kelly',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    age: 22,
    startDate: "2012/03/29",
    salary: '$433,060'
  },
  {
    name: 'Airi Satou',
    position: 'Accountant',
    office: 'Tokyo',
    age: 33,
    startDate: "2008/11/28",
    salary: '$162,700'
  },
  {
    name: 'Brielle Williamson',
    position: 'Integration Specialist',
    office: 'New York',
    age: 61,
    startDate: "2012/12/02",
    salary: '$372,000'
  },
  {
    name: 'Herrod Chandler',
    position: 'Sales Assistant',
    office: 'San Francisco',
    age: 59,
    startDate: "2012/08/06",
    salary: '$137,500'
  },
  {
    name: 'Rhona Davidson	',
    position: 'Integration Specialist',
    office: 'Tokyo',
    age: 55,
    startDate: "2010/10/14",
    salary: '$327,900'
  },
  {
    name: 'Colleen Hurst',
    position: 'Javascript Developer',
    office: 'San Francisco',
    age: 39,
    startDate: "2009/09/15",
    salary: '$205,500'
  },
  {
    name: 'Tiger Nixon',
    position: 'System Architect',
    office: 'Edinburgh',
    age: 61,
    startDate: "2011/04/25",
    salary: '$320,800'
  },
  {
    name: 'Garrett Winters',
    position: 'Accountant',
    office: 'Tokyo',
    age: 63,
    startDate: "2011/07/25",
    salary: '$170,750'
  },
  {
    name: 'Ashton Cox',
    position: 'Junior Technical Author',
    office: 'San Francisco',
    age: 66,
    startDate: "2009/01/12",
    salary: '$86,000'
  },
  {
    name: 'Cedric Kelly',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    age: 22,
    startDate: "2012/03/29",
    salary: '$433,060'
  },
  {
    name: 'Airi Satou',
    position: 'Accountant',
    office: 'Tokyo',
    age: 33,
    startDate: "2008/11/28",
    salary: '$162,700'
  },
  {
    name: 'Brielle Williamson',
    position: 'Integration Specialist',
    office: 'New York',
    age: 61,
    startDate: "2012/12/02",
    salary: '$372,000'
  },
  {
    name: 'Herrod Chandler',
    position: 'Sales Assistant',
    office: 'San Francisco',
    age: 59,
    startDate: "2012/08/06",
    salary: '$137,500'
  },
  {
    name: 'Rhona Davidson	',
    position: 'Integration Specialist',
    office: 'Tokyo',
    age: 55,
    startDate: "2010/10/14",
    salary: '$327,900'
  },
  {
    name: 'Colleen Hurst',
    position: 'Javascript Developer',
    office: 'San Francisco',
    age: 39,
    startDate: "2009/09/15",
    salary: '$205,500'
  }
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  //Pagination
  page = 1;
  pageSize = 4;
  collectionSize = EMPLOYEES.length;

  get employees(): Employee[] {
    return EMPLOYEES
      .map((employee, i) => ({id: i + 1, ...employee}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize)
  }

  constructor() {}

  ngOnInit(): void {

 }

}
