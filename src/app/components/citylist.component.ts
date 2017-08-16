import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CitylistComponent implements OnInit {

  constructor() { }
  @ViewChild("getCity") getCity: NgForm;

  @Output('onAdd') onAdd = new EventEmitter<string>();

  ngOnInit() {
  }

  cityisAdded(): void {
    console.log("%s is entered.", this.getCity.value.cityName);
    this.onAdd.emit(this.getCity.value.cityName);
    this.getCity.reset();
  }



}
