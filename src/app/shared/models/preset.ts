import { ReadonlyMapBuilder } from "../core/readonly-map-builder";
import { FormattedLyrics } from "./formatted-lyrics";
import { Label } from "./label";
import { SongLyricInfo, SongLyricInfoType } from "./song-lyric-info";
import { SongLyrics } from "./song-lyrics";

export interface PresetStrategy {
    format(songLyrics: SongLyrics): FormattedLyrics;
}

export class Preset implements PresetStrategy{

    private labelReplaceStringMap = ReadonlyMapBuilder.create<string, string>()
      .set('Pre Chorus', 'PreChorus')
      .set('Refrain', 'Tag')
      .set('Interlude', 'Tag')
      .build();

    constructor(public id: number = null,
                public name: string,
                public labels: Array<Label>,
                public characterCountLimit: number,
                public lineDelimeter: number,
                public presetType: string) {}


    format(songLyrics: SongLyrics): FormattedLyrics {
        const songLyricInfoArrayList: Array<SongLyricInfo> = [];

        //step 1: store per line in an array
        const lyricsInArray = songLyrics.lyrics.split('\n');
        //step 2: loop through array'
        let lyricCount = 0;
        for(const lyricPerLine of lyricsInArray) {
            const reg = new RegExp('.{1,' + this.characterCountLimit + '}(?:\\s|$)', 'g');
            const breakDownLyrics = lyricPerLine.trim().replace(reg, "$&\n").split('\n');
            
            for(let breakDownLyric of breakDownLyrics) {
                if(breakDownLyric.length > 0) {

                    const isLineALabel: boolean = this.labels.find((v)=>{
                        return v.name === breakDownLyric.trim();
                     }) ? true : false;
                   
                    let spaceBelow = 0;
                    let spaceAbove = 0;
                     if(isLineALabel) {
                        spaceBelow = 1;
                        spaceAbove = 0;

                        const previousSongLyricInfo = songLyricInfoArrayList.length > 0 ? 
                        songLyricInfoArrayList[songLyricInfoArrayList.length -1] : null;

                        if(previousSongLyricInfo && previousSongLyricInfo.type === SongLyricInfoType.LYRICS && 
                           previousSongLyricInfo.spaceBelow === 1) {
                            previousSongLyricInfo.spaceBelow = 2;
                        }

                        const songLyricInfo = new SongLyricInfo(breakDownLyric.trim(), SongLyricInfoType.LABEL, spaceBelow, spaceAbove)
                        songLyricInfo.text = this.labelReplaceStringMap.get(breakDownLyric.trim()) || breakDownLyric;
                        songLyricInfoArrayList.push(songLyricInfo);
                        lyricCount = 0;
                     } else {
                        spaceAbove = 0;
                        spaceBelow = 1;
                        const lyricTypeSongLyricInfoList = songLyricInfoArrayList.filter((v)=>{
                            return v.type === SongLyricInfoType.LYRICS;
                        });

                        const previousSongLyricInfo = lyricTypeSongLyricInfoList.length > 0 ? 
                        lyricTypeSongLyricInfoList[lyricTypeSongLyricInfoList.length -1] : null;

                        if( previousSongLyricInfo && (lyricCount % (this.lineDelimeter)) === 0) {
                            previousSongLyricInfo.spaceBelow = 2;
                        } 
                        songLyricInfoArrayList.push(
                            new SongLyricInfo(breakDownLyric.trim(), SongLyricInfoType.LYRICS, spaceBelow, spaceAbove)
                        );
                        lyricCount++;
                     }
                }
            }
        };
        return new FormattedLyrics(songLyricInfoArrayList);
    }
}