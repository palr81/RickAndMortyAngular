import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
})
export class EpisodesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  api(): any {
    let json: any = {};

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://rickandmortyapi.com/api/episode', false);

    xhr.onload = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        json = JSON.parse(xhr.responseText).results;
      }
    };
    xhr.send(null);
    return json;
  }
}
