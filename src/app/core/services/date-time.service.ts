import { Injectable } from '@angular/core';
import { NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
export interface CompareDate {
  from: string;
  to: string;
  compareFrom: string;
  compareTo: string;
}

@Injectable({
  providedIn: 'root',
})
export class DateTimeService {
  private today: Date = new Date();

  // Transform Date to UTC-ISO string
  private transformIsoStartDate = (date): string => new Date(new Date(date).setHours(0, 0, 0, 0)).toISOString();
  private transformIsoEndDate = (date): string => new Date(new Date(date).setHours(0, 0, 0, -1)).toISOString();

  // Transform Date Back
  public transformFromIso = (date): Date => new Date(date);

  // Transform Date Format
  public transformDateDDMMYYYY = (date): string => moment(date).format('DD/MM/YYYY');
  public transformDateDDMMYYYY_HHMM = (date): string => moment(date).format('DD/MM/YYYY HH:mm');

  // Today - Original
  public getToday = (): Date => this.today;
  // Today - NgbDate
  public getTodayNgb = (): NgbDateStruct => new NgbDate(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
  // Today - Range
  public getTodayRange = (): CompareDate => {
    return {
      from: this.transformIsoStartDate(new Date().setDate(new Date().getDate())),
      to: this.transformIsoEndDate(new Date().setDate(new Date().getDate() + 1)),
      compareFrom: this.transformIsoStartDate(new Date().setDate(new Date().getDate() - 1)),
      compareTo: this.transformIsoEndDate(new Date().setDate(new Date().getDate())),
    };
  };

  // Yerterday

  constructor() {}
}
