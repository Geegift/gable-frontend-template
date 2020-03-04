import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule, NgbDatepickerModule, NgbTypeaheadModule, NgbTabsetModule, NgbModalModule, NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table.component';
import { TableRoutes } from './table-routing.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    HttpClientModule,
    NgbTabsetModule,
    NgbModalModule,
    NgbAlertModule,
    NgbModule,
    TableRoutes,
  ],
})
export class TableModule {}
