import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public auth: AuthService, private http: HttpClient) { }

  title = 'AngularAuth0Demo';
  weatherItems: any = [];

  ngOnInit() {
    //this.http.get('https://localhost:5000/WeatherForecast').subscribe((reply) => {
      this.http.get('https://localhost:5000/api/dummy/GetInfo').subscribe((reply) => {
        this.weatherItems = reply;
        console.log(this.weatherItems);
    });
  }
}
