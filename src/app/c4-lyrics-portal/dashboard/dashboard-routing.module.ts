import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { C4LyricsPortalComponent } from "../c4-lyrics-portal.component";

const routes: Routes = [
    {
      path: '',
      component: C4LyricsPortalComponent,
      canActivate: []
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }
  