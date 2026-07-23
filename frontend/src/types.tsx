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

export interface QuestionAnswer{
    id:number,
    question:string,
    answer:string
}

export interface StoryUIProps{
    ansData:QuestionAnswer[],
    selected:number,
    handleClick:(index:number)=>void

}


export interface ArtistUIProps{
    artists:RankedArtist[],
    selectId:number,
    setSelectId:React.Dispatch<React.SetStateAction<number>>

}
export interface ProductDetailUIProps{
    selected:string,
    setSelected:React.Dispatch<React.SetStateAction<string>>
}

export interface NavBarUIProps{
    navCheck:boolean,
    setNavCheck:React.Dispatch<React.SetStateAction<boolean>>
}
export interface CommunityUIProps{
    selected:string,
    setSelected:React.Dispatch<React.SetStateAction<string>>
}