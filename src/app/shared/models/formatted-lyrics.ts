import { SongLyricInfo } from "./song-lyric-info";

export class FormattedLyrics { //Implement Strategy Pattern [Format for Clipboard, Format for display, Format for export as TXT]

    private toString(formmatedLyricsArray: Array<string>):string {
        let lyricsArrayToString: string = '';

        for(let formmatedLyricsPerLine of formmatedLyricsArray) {
            lyricsArrayToString = lyricsArrayToString + `${formmatedLyricsPerLine}`
        }

        return lyricsArrayToString;
    }

    constructor(public songLyricInfoArrayList: Array<SongLyricInfo> = []) { };

    toDisplayHtml(): string {
        const formmatedLyricsArray: Array<string> = []
        for(let songLyricInfo of this.songLyricInfoArrayList) {
            formmatedLyricsArray.push(
                `${this.computeSpaceBreak(songLyricInfo.spaceAbove)}${songLyricInfo.text}${this.computeSpaceBreak(songLyricInfo.spaceBelow)}`
            )
        };
        return this.toString(formmatedLyricsArray);
    }

    private computeSpaceBreak(numberofSpace: number): string {
        let spaceBreak: string = '';
        for(let i = 0; i < numberofSpace; i++ ) {
            spaceBreak = `${spaceBreak}<br/>`
        }
        return spaceBreak;
    }


}