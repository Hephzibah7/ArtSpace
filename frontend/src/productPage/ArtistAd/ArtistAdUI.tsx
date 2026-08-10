
import { hover, motion } from "framer-motion"
import { fadeDown, fadeLeft, fadeRight, fadeUp, slow, fast, spring, hoverCard, tap } from "../../animations"
import ProductCardComponent from "../Cards/productCard/productCardComponent"

function ArtistAdUI() {
    return (
        <div className='w-full h-contain p-5'>
            <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                transition={slow}
                className="text-4xl uppercase font-bold tracking-tighter">
                More from this artist
            </motion.div>
            <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                transition={slow}
                className='flex gap-2 mt-1 text-sm text-pink-600'>
                <div>Discover more artworks by this artist</div>
                <div className='cursor-pointer font-bold underline'>View Profile</div>
            </motion.div>
            <div className='flex gap-5 mt-5'>
                <ProductCardComponent />
                <ProductCardComponent />
                <ProductCardComponent />
                <ProductCardComponent />
                <ProductCardComponent />
            </div>

        </div>
    )
}

export default ArtistAdUI
