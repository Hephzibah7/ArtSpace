
function HomeUI() {
  return (
    <div className="w-full h-contain bg-yellow-200 p-10">
      <div className="text-[15vw] md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase flex justify-center">
        season drop 2026
      </div>
      <div className="mt-10 flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-10">
        <div className="flex flex-col gap-5">
            <div className="flex justify-between">
                <div className="uppercase font-bold text-3xl">fresh designs and bold looks</div>
                <div className="text-pink-600 text-3xl">+</div>
            </div>
            <div><img className="h-[400px] w-[400px] object-cover" src="pic1.jpg"/></div>
        </div>
        <div><img className="h-[490px] w-[400px] object-cover" src="pic1.jpg"/></div>
        <div>
            <div className="flex flex-col gap-5">
                 <div><img className="h-[400px] w-[400px] object-cover" src="pic1.jpg"/></div>
            <div className="flex justify-between">
                <div className="uppercase font-bold text-3xl">fresh designs and bold looks</div>
                <div className="text-pink-600 text-3xl">+</div>
            </div>
           
        </div>
        </div>
      </div>
    </div>
  )
}

export default HomeUI
