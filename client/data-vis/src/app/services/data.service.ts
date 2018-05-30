import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Data } from '../data';
import { MockData } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Observable<Data[]> {
  	return of(MockData);
  }
}
