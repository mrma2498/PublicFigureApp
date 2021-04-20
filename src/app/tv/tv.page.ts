import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.page.html',
  styleUrls: ['./tv.page.scss'],
})
export class TvPage implements OnInit {

  /**Variável destinada a guardar o resultado da chamada à API */
  public aparencias: any;

  /**Faz uma chamada GET à API para obter os dados sobre todos os créditos de televisão do ator com id 131, inserindo o resultada dessa chamada na váriavel "aparencias" */
  constructor (public http: HttpClient) {
    this.http.get('https://api.themoviedb.org/3/person/131/tv_credits?api_key=2a79881ec32301f25df0803432b96e07&language=pt-PT').subscribe(data => {
      this.aparencias=data['cast'];
      console.log(this.aparencias);
  })
  }

  ngOnInit() {
  }

}
