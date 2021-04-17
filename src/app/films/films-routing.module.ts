import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsPage } from './films.page';



const routes: Routes = [
  {
    path: '',
    component: FilmsPage,
    children:[
      {
        path: '/theater',
        loadChildren: () => import('../theater/theater.module').then( m => m.TheaterPageModule)
      },
    ]
  },

  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsPageRoutingModule {}
