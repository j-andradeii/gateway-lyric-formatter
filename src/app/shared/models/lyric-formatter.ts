import { FormattedLyrics } from "./formatted-lyrics";
import { SongLyrics } from "./song-lyrics";
import { PresetStrategy } from "./preset";

export class LyricFormatter {
    private presetStrategy: PresetStrategy;
    
    constructor(presetStrategy: PresetStrategy, public songLyrics: SongLyrics) {
        this.presetStrategy = presetStrategy;
    }

    setPresetStrategy(presetStrategy: PresetStrategy) {
        this.presetStrategy = presetStrategy;
    }

    format(): FormattedLyrics {
        return this.presetStrategy.format(this.songLyrics);
    }
}