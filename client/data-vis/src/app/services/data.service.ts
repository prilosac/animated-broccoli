import { Injectable } from '@angular/core';
import { Data } from '../data';
import { MockData } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Data[] {
  	return MockData;
  }
}
