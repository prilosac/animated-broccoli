import { Injectable } from '@angular/core';
import { HTTPClient } from '@angular/http'
import { Observable, of } from 'rxjs';
import { Data } from '../data';
import { MockData } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HTTPClient) { }

  getData(): Observable<Data[]> {
  	return of(this.http.get('/api/process-svm'))
  	//return of(MockData);
  }
}
