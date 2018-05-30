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

  getData(type: number) {
  	// 0 = RandomForest, 1 = SVM, 2 = Bagging
  	switch(type){
  		case 0:
  			return(this.http.get(environment.apiEndpoint +'/process-rfr'));
  		case 1:
  			return(this.http.get(environment.apiEndpoint +'/process-svm'));
  		case 2:
  			return(this.http.get(environment.apiEndpoint +'/process-bagging'));

  		default:
  			return('Bad type argument.');
  	}
  }
}
