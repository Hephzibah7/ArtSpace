
import {type ArtistUIProps } from "../../types"

function ArtistUI({artists,selectId,setSelectId}:ArtistUIProps) {
  return (
    <div className="w-full h-contain p-20 mt-20">
      <div>
        <div className="uppercase font-bold text-7xl tracking-tighter">top 3 artist of month january</div>
        <div className="mt-20 flex flex-col gap-5">
          {artists.map((artist:any)=>
            <div key={artist.id}>
                {artist.id!=selectId?(
                     <div className="flex flex-col gap-5 cursor-pointer" onClick={()=>setSelectId(artist.id)}>
             <div className="flex justify-between w-3/4">
                <div className="font-bold uppercase tracking-tighter text-3xl">{artist.name}</div>
                <div className="text-pink-600 font-bold text-xl">Discover Profile {"->"}</div>
            </div>
            <div className="text-pink-600"><hr className="border-pink-600"/></div>
           </div>
                )
                :
                (
                    <div className="p-10 bg-black text-white flex justify-between">
                        <div>
                            <div className="uppercase text-3xl w-2/3 font-bold tracking-tighter">Top {artist.id} Artist of month January 2026 with total items sold this month is {artist.items}</div>
                            <div className="mt-5 font-bold tracking-tighter">Rate- {artist.rate}</div>
                            <div className="mt-2 text-pink-600">Explore More</div>
                        </div>
                        <div><img className="object-cover h-[250px] w-[470px]" src="pic1.jpg"/></div>
                    </div>
                )}
            </div>
          )}
        </div>
      </div>  
    </div>
  )
}

export default ArtistUI
