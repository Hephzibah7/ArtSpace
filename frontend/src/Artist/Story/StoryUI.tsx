import type { StoryUIProps } from "../../types"


function StoryUI({ ansData, selected, handleClick }: StoryUIProps) {
    return (
        <div className="w-full h-contain p-5">
            <div className="tracking-tighter text-4xl font-bold">The Story Behind This Artwork</div>
            <div className="mt-2 text-pink-600 font-bold italic text-sm tracking-wider">"Every Masterpiece has a story" </div>
            <div className="mt-2 grid grid-rows-2 gap-3 grid-cols-2 p-5">
                <div className="row-span-2 flex flex-col gap-5">
                    {ansData.map((data) =>
                        <div key={data.id} onClick={() => handleClick(data.id)}>
                            <div className=" cursor-pointer flex justify-between">
                                <h1 className="italic font-bold">{data.question}</h1>
                                <img className="w-5 h-5" src="arrow-down.png" />
                            </div>
                            
                            {selected == data.id && <div>
                                <div className="italic text-sm">{data.answer}
                                </div>
                            </div>
                            }
                            <hr className="mt-3 border border-black"></hr>
                        </div>

                    )}



                </div>
                <div className=" flex gap-2">
                    <div className="bg-black  rounded p-5 text-sm font-bold ">
                        <div className="flex gap-2">
                            <h1 className="text-white mb-2  uppercase">Artist mood</h1>
                            <img className="w-5 h-5" src="mood.png"/>
                        </div>
                        <div className="grid text-sm grid-cols-2 grid-rows-2 gap-2">
                            <h2 className="  bg-pink-300 p-2 rounded">Nostaligic</h2>
                             <h2 className=" bg-pink-300 p-2 rounded">Nostaligic</h2>
                              <h2 className="bg-pink-300 p-2 rounded">Nostaligic</h2>
                               <h2 className="bg-pink-300 p-2 rounded">Nostaligic</h2>
                        </div>
                    </div>
                    <div className="bg-black  rounded p-5 text-sm font-bold ">
                       <div className="flex gap-2">
                            <h1 className="text-white mb-2  uppercase">Color palette</h1>
                            <img className="w-5 h-5" src="color-circle.png"/>
                        </div>
                        <div className="grid text-sm grid-cols-2 grid-rows-2 gap-2">
                            <h2 className="  bg-pink-300 p-2 rounded">Blue</h2>
                             <h2 className=" bg-pink-300 p-2 rounded">Nostaligic</h2>
                              
                        </div>
                    </div>
                    <div className="bg-black  rounded p-5 text-sm font-bold ">
                        <div className="flex gap-2">
                            <h1 className="text-white mb-2  uppercase">Techniques used</h1>
                            <img className="w-5 h-5" src="paint-brush.png"/>
                        </div>
                        <div className="grid text-sm grid-cols-2 grid-rows-2 gap-2">
                            <h2 className="  bg-pink-300 p-2 rounded">layering</h2>
                            <h2 className="  bg-pink-300 p-2 rounded">layering</h2>
                        </div>
                    </div>
                </div>
                
                <div className="row-span-1 bg-rose-300 rounded p-5">
                   <div className="flex gap-1">
                    <img className="w-5 h-5" src="heart.png"/>
                     <h1 className="font-bold ">Note from the artist</h1>
                   </div>
                    <h2 className="text-sm italic break-words">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h2>
                </div>
            </div>
        </div>
    )
}

export default StoryUI
