import React from 'react'

function ArtUI() {
  return (
    <div className='mt-20 h-contain w-full p-2 md:p-10'>
        <div className='flex text-left uppercase font-bold tracking-tighter text-7xl'>Best Arts</div>
        <div className='mt-10 flex flex-col gap-4 md:gap-0  md:grid md:grid-flow-col  md:grid-rows-2 md:grid-cols-3 '>
            <div className='row-start-1 row-span-2 col-span-2 p-2'>
                <div className='mb-2 uppercase tracking-tighter font-bold text-pink-600 text-xl'>First</div>
                <img className="object-cover h-[250px] w-[470px] md:h-[550px] md:w-full" src="pic1.jpg"/>
            </div>
             <div className='row-start-1 col-span-1 p-2'>
                <div className='mb-2 uppercase tracking-tighter font-bold text-pink-600 text-xl'>second</div>
                <img className="object-cover h-[250px] w-[470px] md:h-[250px] md:w-full" src="pic1.jpg"/>
             </div>
              <div className='row-start-2 col-span-1 p-2'>
                <div className='mb-2 uppercase tracking-tighter font-bold text-pink-600 text-xl'>Third</div>
                <img className="object-cover h-[250px] w-[470px] md:h-[250px] md:w-full" src="pic1.jpg"/>
              </div>
        </div>
    </div>
  )
}

export default ArtUI
