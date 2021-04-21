import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.page.html',
  styleUrls: ['./filme.page.scss'],
})
export class FilmePage implements OnInit {

  filme: any;

  constructor(private rotaAtiva: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rotaAtiva.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.filme = this.router.getCurrentNavigation().extras.state.filme;
      }
    });
  }

}
