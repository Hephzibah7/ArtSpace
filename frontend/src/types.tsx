export interface Artist{
    rank:string
    id:number,
    name:string,
    items:number,
    rate:number,
    
}

export interface RankedArtist{
    rank:string
    id:number,
    name:string,
    items:number,
    rate:number,
    order:number,
    medal:string
}

export interface ArtistUIProps{
    artists:RankedArtist[],
    selectId:number,
    setSelectId:React.Dispatch<React.SetStateAction<number>>

}

export interface NavBarUIProps{
    navCheck:boolean,
    setNavCheck:React.Dispatch<React.SetStateAction<boolean>>
}