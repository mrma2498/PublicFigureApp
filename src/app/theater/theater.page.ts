import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.page.html',
  styleUrls: ['./theater.page.scss'],
})
export class TheaterPage implements OnInit {

  public pecas: any;

  constructor() { }

  ngOnInit() {
    fetch('./assets/data/listateatro.json')
      .then(resposta => resposta.json())
      .then(json => {
        this.pecas = json;
        console.log(this.pecas);
      });

  }

  

}
