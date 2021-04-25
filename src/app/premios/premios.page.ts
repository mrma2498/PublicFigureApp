import { Component, OnInit, ViewChild } from '@angular/core';

import { KeyValue } from '@angular/common';
import { IonSearchbar } from '@ionic/angular';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.page.html',
  styleUrls: ['./premios.page.scss'],
})
export class PremiosPage implements OnInit {

  

  /**Variável destinada a guardar os dados do resultado da chamada fetch ao ficheiro json. */
  public premios: any;


  constructor() { }

  ngOnInit() {
    /**Obtém os dados do ficheiro JSON indicado no url fornecido, inserindo a sua resposta na variável "premios" */
    fetch('./assets/data/listapremios.json')
      .then(resposta => resposta.json())
      .then(json => {
        this.premios = json;
        
      });

      
  }

  /**Ordena o ficheiro JSON pelo seu número Keyvalue  original*/
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

 
  

}
