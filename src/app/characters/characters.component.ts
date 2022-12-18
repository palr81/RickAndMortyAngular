import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
cardFiller():any{
 let json:any = {};

 let xhr = new XMLHttpRequest();

 xhr.open("GET","https://rickandmortyapi.com/api/character",false);

 xhr.onload = function(){
    if (xhr.readyState==4 && xhr.status==200){
      json = JSON.parse(xhr.responseText).results;
    }
  };
  xhr.send(null);
  return json;
}
}
