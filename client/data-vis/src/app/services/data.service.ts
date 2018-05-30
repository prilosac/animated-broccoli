import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment'
import { Data } from '../data';
import { MockData } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
  	return(this.http.get(environment.apiEndpoint +'/process-svm'));
  }
}
