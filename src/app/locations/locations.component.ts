import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 api():any{
  let json:any = {};

  let xhr = new XMLHttpRequest();

  xhr.open("GET","https://rickandmortyapi.com/api/location",false);
  xhr.onload = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
      json = JSON.parse(xhr.responseText).results;
    }
  }
    xhr.send(null);
    return json;
 }
}
