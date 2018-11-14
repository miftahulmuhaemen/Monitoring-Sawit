import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    displayedColumns: string[] = ['id', 'Date', 'CarbonDiokside', 'Humadity', 'Temperatur'];
    dataSource = new MatTableDataSource<Elements>();
    @ViewChild(MatPaginator) paginator: MatPaginator;

    chartKarbonDioksida = []
    chartKelembaban = []
    chartTemperatur = []


  constructor(private Data : DataService) { }

  ngOnInit() {

    this.Data.getData().subscribe((data:any)  => {

      data.data.forEach( (element, index) => {
        data.data[index].Date = data.data[index].Date.substring(0, 10)
      })

      this.chartKarbonDioksida = this.onChartData(data['data'].map(data => data.Date),data['data'].map(data => data.CarbonDiokside), 'canvas')
      this.chartKelembaban = this.onChartData(data['data'].map(data => data.Date),data['data'].map(data => data.Humadity), 'canvas_')
      this.chartTemperatur = this.onChartData(data['data'].map(data => data.Date),data['data'].map(data => data.Temperatur), 'canvas__')

      this.dataSource = new MatTableDataSource(data.data);
      this.dataSource.paginator = this.paginator;
    })

        setInterval(() => {
          console.log("Loop LiveData")
        }, 600);

  }

      onChartData(label, data, name){
       return  new Chart(name, {
            type: 'line',
            data: {
              labels: label,
              datasets: [
                {
                  data: data,
                  borderColor: "#3cba9f",
                  fill: false
                }
              ]
            },
            options: {
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  display: true
                }],
                yAxes: [{
                  display: true
                }],
              }
            }
          });
      }

}

export interface Elements {
  status : number;
  data : {
    id: number;
    Date: string;
    CarbonDiokside: string;
    Humadity: string;
    Temperatur : string;
  }
}
