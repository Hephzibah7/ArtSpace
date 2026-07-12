import ArtistUI from "./ArtistUI"
import { useState, useEffect } from "react"
import { type Artist } from "../../types";

function ArtistComponent() {
    const [selectId, setSelectId]=useState(0);
    const medals:string[]=["gold.png","silver.png","bronze.png"];
    useEffect(()=>{
        console.log(selectId);
    })
    const artists:Artist[]=[
        {
            rank:"first",
            id:1,
            name:"Hephzibah Ranjan",
            items:15,
            rate:4
        },
        {
            rank:"second",
            id:2,
            name:"Beulah Ranjan",
            items:10,
            rate:4
        },
        {
            rank:"third",
            id:3,
            name:"Shristi Ranjan",
            items:9,
            rate:4
        }
    ]

    const rankedArtists=artists.map((artist,index)=>({
        ...artist,
         order: index + 1,
        medal: medals[index]
    }));

    
  return (
    <div>
      <ArtistUI
      artists={rankedArtists}
      selectId={selectId}
      setSelectId={setSelectId}

      />
    </div>
  )
}

export default ArtistComponent
