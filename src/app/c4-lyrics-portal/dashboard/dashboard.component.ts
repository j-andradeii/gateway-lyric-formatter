import { Component, HostListener, ViewChild } from '@angular/core';
import { Label } from 'src/app/shared/models/label';
import { SongLyrics } from 'src/app/shared/models/song-lyrics';
import { LyricFormatter } from 'src/app/shared/models/lyric-formatter';
import { Preset } from 'src/app/shared/models/preset';
import {Editor} from 'primeng/editor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild('editor') editor: Editor;
  
  text: string;
  copiedText: string;
  isTextEdited: boolean = false;
  constructor() { }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // const editor = document.querySelector('[contenteditable="true"]');
    if (event.code === 'KeyC' && event.key === 'c') {
      if(this.editor && this.editor.value && this.editor.value.length > 0) {
        event.preventDefault();
        navigator.clipboard.writeText(this.editor.quill.editor.delta.ops[0].insert).then(() => {
          // console.log('Text copied to clipboard', this.editor.quill.editor.delta.ops[0].insert);
        });
      }
    } 
  }

  formatLyrics() {
    if(this.copiedText && this.copiedText.length > 0) {
      const labels:Array<Label> = [
        new Label(null, 'Pre Chorus'),
        new Label(null, 'Chorus'),
        new Label(null, 'Chorus 1'),
        new Label(null, 'Chorus 2'),
        new Label(null, 'Chorus 3'),
        new Label(null, 'Chorus 4'),
        new Label(null, 'Verse 1'),
        new Label(null, 'Verse 2'),
        new Label(null, 'Verse 3'),
        new Label(null, 'Verse 4'),
        new Label(null, 'Bridge'),
        new Label(null, 'Bridge 1'),
        new Label(null, 'Bridge 2'),
        new Label(null, 'Bridge 3'),
        new Label(null, 'Bridge 4'),
        new Label(null, '[Chorus]'),
        new Label(null, '[Chorus 1]'),
        new Label(null, '[Chorus 2]'),
        new Label(null, '[Chorus 3]'),
        new Label(null, '[Chorus 4]'),
        new Label(null, '[Verse 1]'),
        new Label(null, '[Verse 2]'),
        new Label(null, '[Verse 3]'),
        new Label(null, '[Verse 4]'),
        new Label(null, '[Bridge]'),
        new Label(null, '[Bridge 1]'),
        new Label(null, '[Bridge 2]'),
        new Label(null, '[Bridge 3]'),
        new Label(null, '[Bridge 4]'),
        new Label(null, '[Refrain]'),
        new Label(null, 'Tag'),
        new Label(null, 'Interlude')
      ]
      const songLyrics = new SongLyrics(`What a Beautiful Name`, this.copiedText, `Hillsong`);
      const preset = new Preset(null, `Default`, labels, 28, 2, 'Pro-Presenter');
      const lyricFormatter = new LyricFormatter(preset, songLyrics);
      const formattedLyrics = lyricFormatter.format();
      this.text = formattedLyrics.toDisplayHtml();
    }
  }


  onTextChange(ev:any) {
    this.isTextEdited = true;
    this.copiedText = ev.textValue;
  }

  exportTxt() {
    const blob = new Blob([this.copiedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.download = 'my-file.txt';
    anchor.href = url;
    anchor.click();
  }
}
