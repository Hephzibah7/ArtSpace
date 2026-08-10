
import { hover, motion } from "framer-motion"
import { fadeDown, fadeLeft, fadeRight, fadeUp, slow, fast, spring, hoverCard, tap } from "../../../animations"

function ProductCardUI() {
    return (
        <div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                transition={fast}
                whileHover={hoverCard}
                className='cursor-pointer p-3 rounded-xl '>
                <img className="object-cover h-[250px] w-[270px] rounded-xl" src="pic1.jpg" />
                <div className='flex justify-between gap-5'>
                    <div className='text-2xl font-bold tracking-tighter uppercase mt-2 '>The weeping artist</div>

                </div>
                <div className='text-xl'>$15.00</div>
                <div className='flex gap-1 mt-2'>
                    <img className="w-5 h-5" src="heart.png" />
                    <div className=' text-sm font-bold'>14.5k</div>
                </div>
                <div className='font-extrabold'>Sold/Available</div>
                <div className='flex gap-1'>
                    <h1 className='underline font-bold'>Quick View</h1>
                    <img className='w-4 h-4 mt-1' src="right-arrow.png" />
                </div>
            </motion.div>
        </div>
    )
}

export default ProductCardUI;
