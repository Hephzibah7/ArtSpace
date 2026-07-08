export interface Artist{
    id:number,
    name:string,
    items:number,
    rate:number
}

export interface ArtistUIProps{
    artists:Artist[],
    selectId:number,
    setSelectId:React.Dispatch<React.SetStateAction<number>>

}