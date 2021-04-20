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
    { title: 'Trabalhos', url: '/films', icon: 'film' },
    { title: 'Estudos', url: '/studies', icon: 'school' },
    { title: 'Prémios', url: '/folder/Archived', icon: 'trophy' },
    { title: 'Curiosidades', url: '/curiosities', icon: 'glasses' },
    { title: 'Teatro', url: '/theater', icon: 'accessibility' },
    { title: 'Televisão', url: '/tv', icon: 'tv' },
    
  ];
  
  constructor() {}
}
