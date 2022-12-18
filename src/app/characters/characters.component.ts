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

pageNumber: number = 1;
maxPageNumber!: number;

cardFiller():any{
 let json:any = {};

 let xhr = new XMLHttpRequest();

 xhr.open("GET","https://rickandmortyapi.com/api/character?page="+ this.pageNumber,false);

 xhr.onload = function(){
    if (xhr.readyState==4 && xhr.status==200){
      json = JSON.parse(xhr.responseText);
    }
  };
  xhr.send(null);
  this.maxPageNumber = json.info.pages;
  return json;
}
}
