
import { motion } from "framer-motion";
import { zoomIn,smooth,viewport,slow, fadeUp, fadeDown } from "../../animations";

function HomeUI() {
  return (
    <div className="w-full h-contain  p-10">
      <motion.div
       variants={zoomIn}
       initial="hidden"
       whileInView="visible"
       //viewport={viewport} viewport the animation happens only ones
       transition={slow}
       className="text-[15vw] md:text-8xl lg:text-9xl font-extrabold tracking-tighter uppercase flex justify-center">
        season drop 2026
      </motion.div>
      <div className="mt-10 flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-10">
        <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={smooth}
         className="flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="uppercase font-bold text-3xl">fresh designs and bold looks</div>
            <div className="bg-pink-600 inline-flex justify-center text-center p-2 m-2 cursor-pointer">
              <div className="  font-extrabold text-4xl">+</div>

            </div>
          </div>
          <div><img className="h-[400px] w-[400px] object-cover" src="pic1.jpg" /></div>
        </motion.div>
        <div><img className="h-[490px] w-[400px] object-cover" src="pic1.jpg" /></div>
        <motion.div
        variants={fadeDown}
        whileInView="visible"
        initial="hidden"
        transition={smooth}
        >
          <div className="flex flex-col gap-5">
            <div><img className="h-[400px] w-[400px] object-cover" src="pic1.jpg" /></div>
            <div className="flex justify-between">
              <div className="uppercase font-bold text-3xl">fresh designs and bold looks</div>
              <div className="bg-pink-600 inline-flex justify-center text-center p-2 m-2 cursor-pointer">
                <div className="  font-extrabold text-4xl">+</div>

              </div>            
              </div>

          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HomeUI
