import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TableService {
    constructor(private httpService: HttpClient) {}

    getUserData(): Observable<any> {
        let url = 'https://73bfddd6-5a14-4e9b-b177-5052f0ea0f64.mock.pstmn.io/get-data';
        return this.httpService.get<any>(url);
    }
}