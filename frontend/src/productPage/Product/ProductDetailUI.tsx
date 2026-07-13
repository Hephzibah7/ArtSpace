import React from 'react'
import type { ProductDetailUIProps } from '../../types';

function ProductDetailUI({ selected, setSelected }: ProductDetailUIProps) {
  return (
    <div className='w-full h-contain'>
      <div className='md:grid md:grid-cols-2'>
        <div>
          <img className="object-cover md:w-[700px] md:h-[600px]" src="pic1.jpg" />
          <div className='md:grid md:grid-cols-2 mt-5 '>
            <img className="object-cover md:w-[350px] md:h-[400px]" src="pic1.jpg" />
            <img className="object-cover md:w-[350px] md:h-[400px]" src="pic1.jpg" />
          </div>
        </div>
        <div className='p-5'>
          <div className='flex justify-between'>
            <div>
              <div className='font-bold text-xl'>Limited Edition</div>
              <div className='flex gap-1 tracking-wide text-pink-600 font-bold'><span><img className='w-5' src="fire.png" /></span>Hurry Up! Low in Stock</div>
              <div>x x x x <span className='underline text-pink-600 tracking-wider bold'>10k reviews</span></div>
            </div>
            <div className='italic font-extrabold text-2xl tracking-tighter text-pink-600'>Signed by the Artist</div>
          </div>
          <div className='mt-3 flex justify-between'>
            <h1 className='font-bold tracking-tighter text-6xl'>The Weeping Lady</h1>
            <div><img className='w-5' src="share.png" /></div>
          </div>
          <div className='mt-3 flex gap-3'>
            <div className='bg-rose-300 p-2 rounded-2xl text-sm text-pink-800'>Free Shipping </div>
            <div className='bg-rose-300 p-2  rounded-2xl text-sm text-pink-800'>Fast Delievery </div>
            <div className='bg-rose-300 p-2  rounded-2xl text-sm text-pink-800'>Refund Guarenteed </div>
          </div>
          <hr className='mt-5 border border-rose-300'></hr>
          <div className='tracking-tigher font-bold text-3xl mt-5'>$15.00</div>
          <div className='flex gap-5 mt-5'>
            <h1 className={`font-bold cursor-pointer ${selected == "description" ? "underline underline-offset-[14px] text-pink-600" : "text-black"}`}
              onClick={() => setSelected("description")}>Description</h1>
            <h1 className={`font-bold cursor-pointer ${selected == "artist" ? "underline underline-offset-[14px] text-pink-600" : "text-black"}`}
              onClick={() => setSelected("artist")}>Artist</h1>
            <h1 className={`font-bold cursor-pointer ${selected == "shipping" ? "underline underline-offset-[14px] text-pink-600" : "text-black"}`}
              onClick={() => setSelected("shipping")}>Shipping</h1>
          </div>
          <hr className='mt-2 border border-rose-300'></hr>
          {selected == "description" && (<div className='mt-2 p-5'>

            <div className='bg-rose-300 p-4 rounded  text-sm'>
              Weeping Lady captures the raw depth of human emotion through expressive brushwork, bold colors, and striking facial features. The artwork portrays a woman overwhelmed with grief, yet every fragmented shape and vivid hue transforms sorrow into a powerful visual statement. Rather than depicting sadness alone, it explores themes of resilience, vulnerability, and the enduring strength found in moments of heartbreak.

              Its modern, expressive style makes it a compelling centerpiece for contemporary interiors, inviting viewers to reflect on the complexity of human emotions while adding a dramatic artistic presence to any space.

            </div>
            <div className='mt-7'>
              <h1 className='font-bold text-xl tracking-tighter'>About the Product</h1>
              <div className='mt-2 border border-pink-600 rounded-xl p-5 grid grid-cols-2 '>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-2'>
                    <h1 className='font-bold tracking-tight'>Dimensions - </h1>
                    <h1>24*25 inches</h1>
                  </div>
                  <div className='flex gap-2'>
                    <h1 className='font-bold tracking-tight'>Weight - </h1>
                    <h1>100kg</h1>
                  </div>
                  <div className='flex gap-2'>
                    <h1 className='font-bold tracking-tight'>Year Created - </h1>
                    <h1>2025</h1>
                  </div>
                  <div className='flex gap-2'>
                    <h1 className='font-bold tracking-tight'>Days Took For the - <br></br> Completion of the Art  </h1>
                    <h1>100Days</h1>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-2'>
                    <h1 className='font-bold tracking-tight'>Orientation - </h1>
                    <h1>Portrait</h1>
                  </div>
                  <div className='flex gap-2'>
                    <h1 className='font-bold tracking-tight'>Category - </h1>
                    <h1>Human</h1>
                  </div>
                  <div className='flex gap-2'>
                    <h1 className='font-bold tracking-tight'>Medium - </h1>
                    <h1>Charcoal</h1>
                  </div>
                  <div className='flex gap-2'>
                    <h1 className='font-bold tracking-tight'>Frame - </h1>
                    <h1>Unframed</h1>
                  </div>
                  <div className='flex gap-2'>
                    <h1 className='font-bold tracking-tight'>Style - </h1>
                    <h1>Cubism</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-5'>
              <h1 className='text-2xl font-bold'>Select Your Quantity</h1>
              <div className='flex gap-4 mt-2'>
                <div className='bg-rose-300 rounded-xl p-5 pl-10 pr-10 cursor-pointer '><span></span>1 Piece</div>
                <div className='bg-rose-300 rounded-xl p-5 pl-10 pr-10 cursor-pointer '><span></span>1 Piece</div>
                <div className='bg-rose-300 rounded-xl p-5 pl-10 pr-10 cursor-pointer '><span></span>1 Piece</div>
              </div>
            </div>
            <div className='mt-5'>
              <div className='mt-2 pl-4 pr-4'>
                <button className='bg-black text-white tracking-wider p-3 rounded-xl font-bold w-full text-center justify-center'>Add to Cart</button>
              </div>
              <div className='mt-2 pl-4 pr-4'>
                <button className=' tracking-wider p-3 border border-pink-600 rounded-xl font-bold w-full'>Add to Wishlist</button>
              </div>
            </div>
          </div>
          )}

          {selected == "artist" && (
            <div className='mt-2 p-5'>
              <div className='flex gap-2'>
                <img className="w-[80px] h-[80px] object-cover rounded-full" src="pic1.jpg"/>
                <div className='cursor-pointer'>
                  <h1 className='font-extrabold text-3xl italic'>Hephzibah Ranjan</h1>
                   <div className='text-sm font-bold text-pink-600 flex flex-col '>
                <div className=''>Years Of Experience - <span>5+ years</span></div>
                <div className=''>No of Artworks- <span>25+</span></div>
              </div>
                  </div>
              </div>
              <div className='mt-2 bg-rose-300 rounded p-5 italic'>
                I'm a self-taught contemporary artist passionate about creating expressive portraits and vibrant landscapes. My work explores themes of identity, emotion, and nature through acrylic and mixed media. Over the past five years, I've exhibited my work in local galleries and completed commissioned pieces for collectors around the world.
              </div>
             
              <div className='mt-10 w-1/3 text-wrap '>
                <h1 className='uppercase text-2xl font-bold tracking-tight'>Specialities</h1>
                <div className='mt-2 flex gap-2'>
                  <div className='border border-pink-600 p-2 rounded font-bold'>Oil</div>
                  <div className='border border-pink-600 p-2 rounded font-bold'>Acryclic</div>
                   <div className='border border-pink-600 p-2 rounded font-bold'>Realism</div>
                   <div className='border border-pink-600 p-2 rounded font-bold'>Watercolor</div>
                   <div className='border border-pink-600 p-2 rounded font-bold'>Oil</div>
                  <div className='border border-pink-600 p-2 rounded font-bold'>Acryclic</div>
                   <div className='border border-pink-600 p-2 rounded font-bold'>Realism</div>
                   <div className='border border-pink-600 p-2 rounded font-bold'>Watercolor</div>
                </div>
              </div>
            </div>
          )}

          {selected=="shipping" && (
            <div className='mt-2 p-5'>
              <div className='border border-pink-600 rounded-2xl p-5 flex flex-col gap-2'>
                <div className='grid grid-cols-2 '>
                  <div className='font-bold'>Ships From</div>
                  <div className='w-full break-words'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                </div>
                 <div className='grid grid-cols-2 '>
                  <div className='font-bold'>Estimated Delivery</div>
                  <div className='w-full break-words'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                </div>
                 <div className='grid grid-cols-2 '>
                  <div className='font-bold'>Return Policy</div>
                  <div className='w-full break-words'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  )
}

export default ProductDetailUI;
