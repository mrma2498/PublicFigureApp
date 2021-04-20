import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'films',
    loadChildren: () => import('./films/films.module').then( m => m.FilmsPageModule)
  },
  {
    path: 'theater',
    loadChildren: () => import('./theater/theater.module').then( m => m.TheaterPageModule)
  },
  {
    path: 'studies',
    loadChildren: () => import('./studies/studies.module').then( m => m.StudiesPageModule)
  },
  {
    path: 'tv',
    loadChildren: () => import('./tv/tv.module').then( m => m.TvPageModule)
  },
  {
    path: 'curiosities',
    loadChildren: () => import('./curiosities/curiosities.module').then( m => m.CuriositiesPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
