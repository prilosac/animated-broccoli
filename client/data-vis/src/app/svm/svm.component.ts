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
  }

  getData(): void {
  	this.dataService.getData().subscribe(data => this.data = data);
  }

}
