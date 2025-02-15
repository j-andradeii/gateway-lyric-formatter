import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {EditorModule} from 'primeng/editor';
import {PanelMenuModule} from 'primeng/panelmenu';

//====================== COMPONENTS =======================//
import { C4LyricsDialogComponent } from "./components/c4-lyrics-dialog/c4-lyrics-dialog.component";
import { C4LyricsSplashComponent } from "./components/c4-lyrics-splash/c4-lyrics-splash.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CheckboxModule,
        InputTextModule,
        ButtonModule,
        DialogModule,
        EditorModule,
        PanelMenuModule
    ],
    declarations: [
        //====================== COMPONENTS =======================//
        C4LyricsDialogComponent,
        C4LyricsSplashComponent,

        //====================== PIPES ============================//

        //====================== DIRECTIVES =======================//
    ],
    exports: [
        //====================== MODULES ==========================//
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CheckboxModule,
        InputTextModule,
        ButtonModule,
        DialogModule,
        EditorModule,
        PanelMenuModule,

        //====================== COMPONENTS =======================//
        C4LyricsDialogComponent,
        C4LyricsSplashComponent

        //====================== PIPES ============================//

        //====================== DIRECTIVES =======================//
    ]
})
export class SharedModule{}