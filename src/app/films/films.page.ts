import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NavigationExtras, Router} from '@angular/router';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';



@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {



public filmes: any;

  /**Faz uma chamada GET à API, para obter todos os filmes do ator com id 131, e insere o resultado da chamada na váriavel "filmes"*/
constructor (public http: HttpClient, private router: Router) {
    this.http.get('https://api.themoviedb.org/3/person/131/movie_credits?api_key=2a79881ec32301f25df0803432b96e07&language=pt-PT').subscribe(data => {
      this.filmes=data['cast'];
      console.log(this.filmes);
  })
  }



  ngOnInit() {
  
        
  }


  verDetalhesFilme(id: string){
    let extras: NavigationExtras;

    extras = {
      state: {
      filme: this.filmes[id] 
    }
  }

  this.router.navigate(['/filme'], extras);
}

  

}
