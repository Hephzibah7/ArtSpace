

function FooterUI() {
  return (
    <div className="bg-black p-5 md:p-10 lg:p-20 h-contain w-full text-white text-sm">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
            <div>
                <h1>Mail</h1>
                <h2>hephzibahranjan@gmail.com</h2>
            </div>
            <div>
                <h1>Number</h1>
                <h2>9xxxxxxxxx</h2>
            </div>
            <div className="flex gap-5">
                <div>Star-xxx</div>
                <div>Reviews-xxx</div>
            </div>
        </div>
        <div className="hidden md:flex gap-10">
            <div className="flex flex-col ">
            <h1 className="font-bold uppercase">categories</h1>
            <h1>Portrait</h1>
            <h1>Landscape</h1>
            <h1>Pet Portrait</h1>
            <h1>wedding illustrations</h1>
            <h1>office artwork</h1>
            <h1>custom canvas</h1>
            <h1>digital illustrations</h1>
            </div>
            <div className="flex flex-col ">
            <h1 className="font-bold uppercase">mediums</h1>
            <h1>Oil</h1>
            <h1>Acyclic</h1>
            <h1>Watercolor</h1>
            <h1>Pencil Sketch</h1>
            <h1>Charcoal</h1>
            <h1>Digital Art</h1>
            <h1>Mixed Media</h1>
            </div>
        </div>
        <div>
            <h1 className="uppercase font-bold tracking-tighter text-2xl md:text-6xl lg:text-8xl text-pink-600 ">Artspace</h1>
            <h1 className="text-sm font-bold mt-1 text-right">All rights reserved</h1>
        </div>
      </div>
    </div>
  )
}

export default FooterUI
