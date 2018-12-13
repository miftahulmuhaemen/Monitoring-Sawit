import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { URLSearchParams } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/x-www-form-urlencoded',
  //     'Access-Control-Allow-Origin': '*' 
  //   })
  // };

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('https://us-central1-robust-app-devs.cloudfunctions.net/get-monitoring-data')
  }

  getAllData(){
    return this.http.get('https://asia-northeast1-robust-app-devs.cloudfunctions.net/getAllData')
  }

  // getDataID(ids){
  //   let params : URLSearchParams = new URLSearchParams
  //   params.set('id', ids)
  //   return this.http.post('https://us-central1-robust-app-devs.cloudfunctions.net/onePerData', params, this.httpOptions)
  // }

}
