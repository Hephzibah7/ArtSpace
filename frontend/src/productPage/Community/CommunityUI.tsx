import type { CommunityUIProps } from "../../types"

function CommunityUI({ selected, setSelected }: CommunityUIProps) {
    return (
        <div className="w-full h-contain p-5">
            <div className="text-4xl uppercase font-bold tracking-tighter">
                Community Responses
            </div>
            <div className="mt-5 flex gap-2">
                <div className="flex gap-1"><img className="w-5 h-5" src="star.png" />
                    <img className="w-5 h-5" src="star.png" />
                    <img className="w-5 h-5" src="star.png" />
                    <img className="w-5 h-5" src="star.png" />
                    <img className="w-5 h-5" src="star.png" />
                </div>
                <div className="flex gap-2 text-pink-600">
                    <div>4.9</div>
                    <div>(23 Buyer reviews)</div>
                </div>
            </div>
            <div className="mt-1 flex gap-1">
                <div><img className="w-5 h-5" src="heart.png" /></div>
                <div className="text-pink-600">14.5k People Loved this Artwork</div>
            </div>
            <div className="flex flex-col gap-5 mt-5 p-5">
                <div className="flex gap-10 font-bold text-xl">
                    <div onClick={() => { setSelected("buyer") }} className={`cursor-pointer ${selected == "buyer" ? "underline underline-offset-[14px] text-pink-600" : "text-black"} `}>Buyer Reviews</div>
                    <div onClick={() => { setSelected("artlover") }} className={`cursor-pointer ${selected == "artlover" ? "underline underline-offset-[14px] text-pink-600" : "text-black"}`}>Art Lovers</div>
                </div>
                {selected=="buyer" && <div className="mt-5 flex flex-col gap-5">
                    <div className="p-5 flex gap-3 border border-pink-600 rounded-xl text-sm">
                        <img className="w-[120px] h-[70px] object-cover rounded-full" src="pic1.jpg" />
                        <div className="w-1/4 font-bold flex flex-col gap-1">
                            <h1 className="text-xl">Erice G</h1>
                            <div className="flex gap-2">
                                <span><img className="w-7 h-7" src="checked.png" /></span>
                                <h3>Verified Customer</h3>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-1"><img className="w-5 h-5" src="star.png" />
                                <img className="w-5 h-5" src="star.png" />
                                <img className="w-5 h-5" src="star.png" />
                                <img className="w-5 h-5" src="star.png" />
                                <img className="w-5 h-5" src="star.png" />
                            </div>
                            <div>
                                The charcoal texture is even more beautiful
                                in person.The charcoal texture is even more beautiful
                                in person.The charcoal texture is even more beautiful
                                in person.The charcoal texture is even more beautiful
                                in person.The charcoal texture is even more beautiful
                                in person.
                            </div>
                            <div className="flex gap-1">
                                <img className="w-5 h-5" src="package-delivered.png"/>
                                <div className="font-bold">Delivered on May 12</div>
                            </div>
                        </div>
                        
                    </div>
                     <div className="p-5 flex gap-3 border border-pink-600 rounded-xl text-sm">
                        <img className="w-[120px] h-[70px] object-cover rounded-full" src="pic1.jpg" />
                        <div className="w-1/4 font-bold flex flex-col gap-1">
                            <h1 className="text-xl">Erice G</h1>
                            <div className="flex gap-2">
                                <span><img className="w-7 h-7" src="checked.png" /></span>
                                <h3>Verified Customer</h3>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-1"><img className="w-5 h-5" src="star.png" />
                                <img className="w-5 h-5" src="star.png" />
                                <img className="w-5 h-5" src="star.png" />
                                <img className="w-5 h-5" src="star.png" />
                                <img className="w-5 h-5" src="star.png" />
                            </div>
                            <div>
                                The charcoal texture is even more beautiful
                                in person.The charcoal texture is even more beautiful
                                in person.The charcoal texture is even more beautiful
                                in person.The charcoal texture is even more beautiful
                                in person.The charcoal texture is even more beautiful
                                in person.
                            </div>
                            <div className="flex gap-1">
                                <img className="w-5 h-5" src="package-delivered.png"/>
                                <div className="font-bold">Delivered on May 12</div>
                            </div>
                        </div>
                        
                    </div>
                     <div className="p-5 flex gap-3 border border-pink-600 rounded-xl text-sm">
                        <img className="w-[120px] h-[70px] object-cover rounded-full" src="pic1.jpg" />
                        <div className="w-1/4 font-bold flex flex-col gap-1">
                            <h1 className="text-xl">Erice G</h1>
                            <div className="flex gap-2">
                                <span><img className="w-7 h-7" src="checked.png" /></span>
                                <h3>Verified Customer</h3>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-1"><img className="w-5 h-5" src="star.png" />
                                <img className="w-5 h-5" src="star.png" />
                                <img className="w-5 h-5" src="star.png" />
                                <img className="w-5 h-5" src="star.png" />
                                <img className="w-5 h-5" src="star.png" />
                            </div>
                            <div>
                                The charcoal texture is even more beautiful
                                in person.The charcoal texture is even more beautiful
                                in person.The charcoal texture is even more beautiful
                                in person.The charcoal texture is even more beautiful
                                in person.The charcoal texture is even more beautiful
                                in person.
                            </div>
                            <div className="flex gap-1">
                                <img className="w-5 h-5" src="package-delivered.png"/>
                                <div className="font-bold">Delivered on May 12</div>
                            </div>
                        </div>
                        
                    </div>


                </div>}
                { selected=="artlover" && <div className="mt-5 flex flex-col gap-5 text-sm ">
                    <div className="flex flex-col gap-3 border border-pink-600 rounded p-5">
                        <div className="flex gap-1">
                            <img  className="w-5 h-5" src="heart.png"/>
                            <h1>Loved this artwork</h1>
                        </div>
                        <div className="italic">
                            The emotions in her face are incredible.
                        </div>
                        <div className="font-bold">
                            -Sophie Lee
                        </div>
                    </div>
                     <div className="flex flex-col gap-3 border border-pink-600 rounded p-5">
                        <div className="flex gap-1">
                            <img  className="w-5 h-5" src="heart.png"/>
                            <h1>Loved this artwork</h1>
                        </div>
                        <div className="italic">
                            The emotions in her face are incredible.
                        </div>
                        <div className="font-bold">
                            -Sophie Lee
                        </div>
                    </div>
                     <div className="flex flex-col gap-3 border border-pink-600 rounded p-5">
                        <div className="flex gap-1">
                            <img  className="w-5 h-5" src="heart.png"/>
                            <h1>Loved this artwork</h1>
                        </div>
                        <div className="italic">
                            The emotions in her face are incredible.
                        </div>
                        <div className="font-bold">
                            -Sophie Lee
                        </div>
                    </div>
                    
                </div>}
            </div>
        </div>
    )
}

export default CommunityUI
