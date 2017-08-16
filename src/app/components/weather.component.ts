import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Http } from '@angular/http';

export interface mainWeather {
  temp: string;
  pressure: string;
  humidity: string;
  tempMin: string;
  tempMax: string;
}

export interface weatherData {
  id: string;
  main: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit, OnChanges {

  @Input() cityName: string;
  private APIKey: string = "66045d58bd51b7acbaeaf1aa24587fd2";
  private host: string = "http://api.openweathermap.org";
  private path: string = "/data/2.5/weather";
  weather: mainWeather = { temp: "", pressure: "", humidity: "", tempMin: "", tempMax: "" };
  myCityWeather: weatherData[] = [];

  constructor(private http: Http) { 
  }

  ngOnInit() {
    this.myCityWeather[0] = { id: "", main: "", description: "", icon: "50d" };
  }

  ngOnChanges() {
    console.log("Stating City value ",this.cityName);
    if (this.cityName != "") {
      this.showWeather();
    }
  }

  showWeather() {
    this.http.get(this.host + this.path,
      { params: { q: this.cityName, units: "metric", APPID: this.APIKey } }).subscribe(
      (result) => {
        this.weather = result.json().main;
        this.myCityWeather = result.json().weather;
      },
      (error) => {
      }
      );
  }
}
