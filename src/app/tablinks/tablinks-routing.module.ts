import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: 'films',
        loadChildren: () => import('../films/films.module').then(m => m.FilmsPageModule)

      },
      {
        path: 'theater',
        loadChildren: () => import('../theater/theater.module').then(m => m.TheaterPageModule)
      },
      {
        path: 'tv',
        loadChildren: () => import('../tv/tv.module').then(m => m.TvPageModule)
      },
      {
        path: '',
        redirectTo: '/tablinks/films',
        pathMatch: 'full'
      }
    ],
    },
    {
      path: '',
      redirectTo: '/tablinks/films',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
