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
    path: 'studies',
    loadChildren: () => import('./studies/studies.module').then( m => m.StudiesPageModule)
  },
  
  {
    path: 'curiosities',
    loadChildren: () => import('./curiosities/curiosities.module').then( m => m.CuriositiesPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tablinks/tablinks.module').then( m => m.TablinksPageModule)
  },
  {
    path: 'filme',
    loadChildren: () => import('./filme/filme.module').then( m => m.FilmePageModule)
  },
  {
    path: 'premios',
    loadChildren: () => import('./premios/premios.module').then( m => m.PremiosPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
