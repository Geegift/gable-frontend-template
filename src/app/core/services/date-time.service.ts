import { Injectable } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class DateTimeService {
  today: Date = new Date();

  public getToday = (): Date => {
    return this.today;
  };

  public getTodayNgb = (): NgbDateStruct => {
    return { year: this.today.getFullYear(), month: this.today.getMonth(), day: this.today.getDate() };
  };

  
  constructor() {}
}
