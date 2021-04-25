import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.page.html',
  styleUrls: ['./filme.page.scss'],
})
export class FilmePage implements OnInit {

  filme: any;

  idFilme: any;

  

  public idIMDB: any;

  private httpOptions = {
    headers: new HttpHeaders({
      "content-type": "application/x-www-form-urlencoded",
      "x-rapidapi-key": "bf678e5d9bmsh77a5fd8f2ed33d9p171431jsn8dfe8f67d090",
      "x-rapidapi-host": "gowatch.p.rapidapi.com"
    })
  }

  public infoStreaming: any;


  constructor(private rotaAtiva: ActivatedRoute, private router: Router,public http: HttpClient) {


   }



  ngOnInit() {
    this.rotaAtiva.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.filme = this.router.getCurrentNavigation().extras.state.filme;

        //Obtem id do filme selecionado
        this.idFilme = this.filme.id;
        this.getIMDB(this.idFilme);
        
      }
    });

    
  }

  /**Obter a id do IMDB */
 getIMDB(idFilme: string){
  this.http.get(`https://api.themoviedb.org/3/movie/${idFilme}?api_key=2a79881ec32301f25df0803432b96e07&language=en-US`).subscribe(data => {
    
        this.idIMDB=data['imdb_id'];
      
  })
}


/**Obtem URL para o site de streaming do filme, através de uma chamada POST onde se insere o ID da IMDB, e dirige o utilizador para
 * a página de streaming do filme
 */
sendToStreaming(id: string) {


  let body = {
    "id": id,
		"type": "movie",
		"country": "us"
  }

  this.http.post("https://gowatch.p.rapidapi.com/lookup/title/imdb_id", body, this.httpOptions)
    .subscribe(data => {
      this.infoStreaming = data['offers'][0].url
      let url = this.infoStreaming
      window.open(url,'_system');
     }, error => {
      console.log(error);
      
    });


  
}


}
