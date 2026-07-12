import { CATEGORY, MEDIUM } from "../constants/Constants"


function FooterUI() {
  return (
    <div className="bg-black p-5 md:p-10 lg:p-20 h-contain w-full text-white text-sm mt-10 md:mt-0">
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
            <h1>{CATEGORY.PORTRAIT}</h1>
            <h1>{CATEGORY.LANDSCAPE}</h1>
            <h1>{CATEGORY.PET_PORTRAIT}</h1>
            <h1>{CATEGORY.WEDDING_ILLUSTRATIONS}</h1>
            <h1>{CATEGORY.CUSTOM_CANVAS}</h1>
            <h1>{CATEGORY.OFFICE_ARTWORK}</h1>
            <h1>{CATEGORY.DIGITAL_ILLUSTRATIONS}</h1>
            </div>
            <div className="flex flex-col ">
            <h1 className="font-bold uppercase">mediums</h1>
            <h1>{MEDIUM.OIL}</h1>
            <h1>{MEDIUM.ARCYCLIC}</h1>
            <h1>{MEDIUM.WATERCOLOR}</h1>
            <h1>{MEDIUM.PENCIL_SKETCH}</h1>
            <h1>{MEDIUM.CHARCOAL}</h1>
            <h1>{MEDIUM.DIGITAL_ART}</h1>
            <h1>{MEDIUM.MIXED_MEDIA}</h1>
            </div>
        </div>
        <div>
            <h1 className="uppercase font-bold tracking-tighter text-2xl md:text-6xl lg:text-8xl text-pink-600 ">Artspace</h1>
            <h1 className="text-sm font-bold mt-1 text-right ">All rights reserved</h1>
            <h1 className="text-right">English</h1>
        </div>
      </div>
    </div>
  )
}

export default FooterUI
