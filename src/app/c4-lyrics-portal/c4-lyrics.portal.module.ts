import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared-module";
import { C4LyricsPortalRoutingModule } from "./c4-lyrics-portal-routing.module";
import { C4LyricsPortalComponent } from './c4-lyrics-portal.component';
import { DashboardModule } from "./dashboard/dashboard.module";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        C4LyricsPortalComponent,
        HeaderComponent,
        SidebarComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        C4LyricsPortalRoutingModule,
        DashboardModule,
    ],
    exports: [
        C4LyricsPortalComponent
    ]
})
export class C4LyricsPortalModule { }
