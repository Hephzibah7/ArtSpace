import ArtistUI from "./ArtistUI"
import { useState, useEffect } from "react"
import { type Artist } from "../../types";

function ArtistComponent() {
    const [selectId, setSelectId]=useState(0);

    useEffect(()=>{
        console.log(selectId);
    })
    const artists:Artist[]=[
        {
            id:1,
            name:"Hephzibah Ranjan",
            items:15,
            rate:4
        },
        {
            id:2,
            name:"Beulah Ranjan",
            items:10,
            rate:4
        },
        {
            id:3,
            name:"Shristi Ranjan",
            items:9,
            rate:4
        }
    ]
  return (
    <div>
      <ArtistUI
      artists={artists}
      selectId={selectId}
      setSelectId={setSelectId}

      />
    </div>
  )
}

export default ArtistComponent
