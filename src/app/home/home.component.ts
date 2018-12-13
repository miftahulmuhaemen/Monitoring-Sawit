import { Component, OnInit, ViewChild} from '@angular/core';
import { DataService } from '../data.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { HttpClient} from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    displayedColumns: string[] = ['Time', 'CarbonDiokside', 'Humadity', 'Temperatur'];
    displayedColumnsAll: string[] = ['id', 'Date', 'Time', 'CarbonDiokside', 'Humadity', 'Temperatur'];
    dataSource = new MatTableDataSource<any>();

    visible = false;
    selected : number = 0;

    CarbonDioxide = [];
    Humidity = [];
    Temperature = [];
    Time = [];

    chartCO = []
    chartHumidity = []
    chartTemperature = []

    canvasCO2 = document.getElementById("canvasCO2");
    canvasHumidity = document.getElementById("canvasHumidity");
    canvasTemperature = document.getElementById("canvasTemperature");
 

    dataSourceStatic = new MatTableDataSource<any>();
    @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private Data : DataService, private http: HttpClient) { }

  ngOnInit() {

    this.dataOnAttach()
    setInterval(()=> {
              this.dataOnAttach()
          }, 2000)

    this.Data.getAllData().subscribe((data:any) => {
      this.dataSourceStatic = new MatTableDataSource(data);
      this.dataSourceStatic.paginator = this.paginator;
    })
        

  }

  dataOnAttach(){

    this.Data.getData().subscribe((data:any)  => {

      this.CarbonDioxide = data.map(data => data.CarbonDiokside)
      this.Humidity = data.map(data => data.Humadity)
      this.Temperature = data.map(data => data.Temperatur)
      this.Time = data.map(data => data.Time)

      if(this.selected == 0)
      this.chartCO = new Chart('canvasCO2', {
        type: 'line',
        data: {
          labels: this.Time,
          datasets: [
            {
              data: this.CarbonDioxide,
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
      })

      if(this.selected == 1)
      this.chartHumidity = new Chart('canvasHumidity', {
        type: 'line',
        data: {
          labels: this.Time,
          datasets: [
            {
              data: this.Humidity,
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
      })

      if(this.selected == 2)
      this.chartTemperature = new Chart('canvasTemperature', {
        type: 'line',
        data: {
          labels: this.Time,
          datasets: [
            {
              data: this.Temperature,
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
      })

      this.dataSource = new MatTableDataSource(data);
      this.visible = true;

    })
  }


}


