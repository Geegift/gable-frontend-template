import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/core/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  constructor(private tableService: TableService) {}

  arrEmployees: string[];

  ngOnInit() {
    this.tableService.getUserData().subscribe(
      data => {
        console.log(data);       
        let employee = data.objectValue;
        this.arrEmployees = employee;
      }, e => console.log(e)
    );
 }
}
