
function CategoryUI() {
  return (
    <div className="h-contain md:h-screen w-full mt-[200px] p-10 ">
      <div className="flex flex-col gap-10 md:grid md:grid-flow-col md:grid-rows-4 h-full md:grid-cols-2  md:gap-10">
        <div className="cursor-pointer flex flex-col md:flex-row md:row-span-2 md:row-start-1 md:col-start-1 md:col-span-2 md:flex md:justify-between ">
            <div className="order-2 md:order-1"><img className="h-[250px] w-[470px] object-cover" src="pic1.jpg"/>
            <div className="mt-2 uppercase">hello</div>
            <div className="text-xs">descirption</div>
            </div>
            <div className="order-1 md:order-2 mb-10 md:mb-0"><h1 className="uppercase tracking-tighter font-extrabold text-7xl md:text-right">new <br></br>arrivals</h1>
            </div>
        </div>
        <div className="cursor-pointer md:row-start-2 md:col-start-2">
            <img className="h-[250px] w-[470px] object-cover" src="pic1.jpg"/>
            <div className="mt-2 uppercase">hello</div>
            <div className="text-xs">descirption</div>


        </div>
        <div className="cursor-pointer md:row-start-3 ">
            <img className="h-[250px] w-[470px] object-cover" src="pic1.jpg"/>
            <div className="mt-2 uppercase">hello</div>
                        <div className="text-xs">descirption</div>

        </div>
      </div>
    </div>
  )
}

export default CategoryUI
