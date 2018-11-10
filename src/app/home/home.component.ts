import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    displayedColumns: string[] = ['id', 'Date', 'CarbonDiokside', 'Humadity', 'Temperatur'];
    dataSource = new MatTableDataSource<PeriodicElement>();
    @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private Data : DataService) { }

  ngOnInit() {


    this.Data.getData().subscribe((data:any)  => {
      data.data.forEach(function (element, index) {
        data.data[index].Date = data.data[index].Date.substring(0, 10)
      })

    setInterval(() => {
      console.log("Loop LiveData")
    }, 600);

      this.dataSource = new MatTableDataSource(data.data);
      this.dataSource.paginator = this.paginator;
    })
  }

}

export interface PeriodicElement {
  status : number;
  data : {
    id: number;
    Date: string;
    CarbonDiokside: string;
    Humadity: string;
    Temperatur : string;
  }
}
