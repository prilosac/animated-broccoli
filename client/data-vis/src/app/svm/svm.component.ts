import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-svm',
  templateUrl: './svm.component.html',
  styleUrls: ['./svm.component.css']
})
export class SVMComponent implements OnInit {

  data: Data[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  	this.getData();
  	console.log("Data is: " + this.data);
  }

  getData(): void {
  	this.dataService.getData(1).subscribe((data: Data[]) => this.data = data);
  }

}
