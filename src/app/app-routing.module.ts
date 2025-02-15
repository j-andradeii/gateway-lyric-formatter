import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'c4-portal'
  },
  // {
  //   path: 'signin',
  //   component: HomeComponent,
  //   canActivate: []
  // },
  {
    path: 'c4-portal',
    loadChildren: () => import('./c4-lyrics-portal/c4-lyrics.portal.module').then(m => m.C4LyricsPortalModule)
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
