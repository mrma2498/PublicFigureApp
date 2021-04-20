import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {



public filmes: any;

  /**Faz uma chamada GET à API, para obter todos os filmes do ator com id 131, e insere o resultado da chamada na váriavel "filmes"*/
  constructor (public http: HttpClient) {
    this.http.get('https://api.themoviedb.org/3/person/131/movie_credits?api_key=2a79881ec32301f25df0803432b96e07&language=pt-PT').subscribe(data => {
      this.filmes=data['cast'];
      console.log(this.filmes);
  })
  }

  /*
  verDetalhesFilme(id: String){
    let extras: NavigationExtras;
    extras = state: {
      filme: this.filmes[]
    }
  }*/

  ngOnInit() {
    /*
    fetch('./assets/data/listafilms.json')
      .then(resposta => resposta.json())
      .then(json => {
        this.filmes = json;
        console.log(this.filmes);
      });*/
        
  }

}
