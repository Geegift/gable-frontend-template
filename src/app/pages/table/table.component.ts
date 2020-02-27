import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
declare var $;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  dtOptions: any;

  constructor() { }

  ngAfterViewInit() {
    this.dtOptions = {"columnDefs": [{ 
      "pagingType": "full_numbers"
    }]};   
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.dtOptions);
 }

//   ngOnInit(): void {
//     this.dtOption = {
//       "paging": true,
//       "ordering": false,
//       "info": false
//     };   
//     this.dataTable = $(this.table.nativeElement);
//     this.dataTable.DataTable(this.dtOption);
//  }

}
