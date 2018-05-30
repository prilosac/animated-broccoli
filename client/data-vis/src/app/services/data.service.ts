import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Data } from '../data';
import { MockData } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Data[]> {
  	return(this.http.get('/api/process-svm'))
  	//return of(MockData);
  }
}
