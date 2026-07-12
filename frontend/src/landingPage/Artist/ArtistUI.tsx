
import { type ArtistUIProps } from "../../types"

function ArtistUI({ artists, selectId, setSelectId }: ArtistUIProps) {
  return (
    <div className="w-full h-contain p-5 lg:p-20 mt-20">
      <div>
        <div className="uppercase font-extrabold text-[15vw] md:text-6xl lg:text-7xl tracking-tighter">Artists of the Month</div>
        <div className="mt-20 flex flex-col gap-5">
          {artists.map((artist: any) =>
            <div key={artist.id}>
              {artist.id != selectId ? (
                <div className="flex flex-col gap-5 cursor-pointer" onClick={() => setSelectId(artist.id)}>
                  <div className="flex justify-between md:w-3/4">
                    <div className="font-bold uppercase tracking-tighter text-3xl">{artist.name}</div>
                    <div className="text-pink-600 font-bold text-xl">Discover Profile {"->"}</div>
                  </div>
                  <div className="text-pink-600"><hr className="border-pink-600" /></div>
                </div>
              )
                :
                (
                  <div className="p-5 md:p-10 bg-black text-white flex flex-col gap-2 md:flex md:flex-row md:gap-0 md:justify-between">
                    <div>
                      <div className="flex gap-2">
                        <div><img className="w-10" src={artist.medal} /></div>

                        <div className="uppercase text-3xl w-2/3 font-bold tracking-tighter">#{artist.order} Artist </div>

                      </div>
                      <div className="mt-20 font-bold uppercase tracking-tighter text-3xl text-pink-600">{artist.name}</div>

                      <div className="flex gap-2">
                        <div><img className="w-5" src="star.png"/></div>
                        <div className=" font-bold tracking-tighter"> {artist.rate}</div>
                      </div>
                      <div>{artist.items} Artworks sold</div>
                      <div className="mt-5 text-pink-600 underline">View Profile</div>
                    </div>
                    <div><img className="object-cover h-[250px] w-[470px]" src="pic1.jpg" /></div>
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
