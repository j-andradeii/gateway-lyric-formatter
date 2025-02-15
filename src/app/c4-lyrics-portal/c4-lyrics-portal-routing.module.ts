import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../shared/guards/auth-guard";
import { C4LyricsPortalComponent } from "./c4-lyrics-portal.component";
const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        component: C4LyricsPortalComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
    },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class C4LyricsPortalRoutingModule { }