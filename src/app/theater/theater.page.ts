import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.page.html',
  styleUrls: ['./theater.page.scss'],
})
export class TheaterPage implements OnInit {

  /**Variável destinada a guardar os dados do resultado da chamada fetch ao ficheiro json. */
  public pecas: any;

  constructor() { }

  ngOnInit() {

    /**Obtém os dados do ficheiro JSON indicado no url fornecido, inserindo a sua resposta na variável "pecas" */
    fetch('./assets/data/listateatro.json')
      .then(resposta => resposta.json())
      .then(json => {
        this.pecas = json;
        console.log(this.pecas);
      });

  }

  

}
