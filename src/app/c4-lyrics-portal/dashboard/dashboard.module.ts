import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared-module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    declarations: [
       DashboardComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        DashboardRoutingModule,
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule { }