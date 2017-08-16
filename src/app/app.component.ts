import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Weather App';

  cityList: string[]=[]; 

  public city: string = "";
  selectedCity: string="";
  ngOnInit() {
  }
  addCityEvent(event) {
    this.city=event;
    for(let i=0;i<this.cityList.length;i++)
      {
        if(this.cityList[i]==event)
          {
            return;
          }
      }
    this.cityList.push(event);
  }

  selected(index: number)
  {
    this.selectedCity = this.cityList[index];
    console.log("%s is selected",this.cityList[index]);
  }

}
