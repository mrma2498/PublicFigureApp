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
    { title: 'Estudos', url: '/folder/Favorites', icon: 'school' },
    { title: 'Prémios', url: '/folder/Archived', icon: 'trophy' },
    { title: 'Curiosidades', url: '/folder/Trash', icon: 'glasses' },
    { title: 'Teatro', url: '/theater', icon: 'accessibility' },
    { title: 'Próximos', url: '/theater', icon: 'calendar-clear' },
    
  ];
  
  constructor() {}
}
