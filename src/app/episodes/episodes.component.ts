import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
})
export class EpisodesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

pageNumber: number = 1;
maxPageNumber!: number;

  api(): any {
    let json: any = {};

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://rickandmortyapi.com/api/episode?page='+ this.pageNumber, false);

    xhr.onload = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        json = JSON.parse(xhr.responseText);
      }
    };
    xhr.send(null);
    this.maxPageNumber = json.info.pages;
    return json;
  }

}
