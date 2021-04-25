import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Página Inicial', url: '/folder/home', icon: 'home' },
    { title: 'Sobre', url: '/about', icon: 'person' },
    { title: 'Trabalhos', url: '/tablinks/films', icon: 'film' },
    { title: 'Estudos', url: '/studies', icon: 'school' },
    { title: 'Prémios', url: '/premios', icon: 'trophy' },
    { title: 'Curiosidades', url: '/curiosities', icon: 'glasses' },
  
  ];
  
  constructor() {}
}
