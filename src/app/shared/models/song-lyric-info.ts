
export enum SongLyricInfoType {
    LYRICS = "LYRICS",
    LABEL = "LABEL"
}

export class SongLyricInfo {
    constructor(public text: string, 
                public type: SongLyricInfoType, 
                public spaceBelow: number, 
                public spaceAbove: number){
    }
}

// export class SongLyricInfoArrayList {
//     public songLyricInfoList: Array<SongLyricInfo> = [];
// }
