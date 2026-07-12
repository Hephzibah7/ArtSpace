
import { motion } from "framer-motion";
function HomeUI() {
  return (
    <div className="w-full h-contain  p-10">
      <motion.div
       initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
       className="text-[15vw] md:text-8xl lg:text-9xl font-extrabold tracking-tighter uppercase flex justify-center">
        season drop 2026
      </motion.div>
      <div className="mt-10 flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="uppercase font-bold text-3xl">fresh designs and bold looks</div>
            <div className="bg-pink-600 inline-flex justify-center text-center p-2 m-2 cursor-pointer">
              <div className="  font-extrabold text-4xl">+</div>

            </div>
          </div>
          <div><img className="h-[400px] w-[400px] object-cover" src="pic1.jpg" /></div>
        </div>
        <div><img className="h-[490px] w-[400px] object-cover" src="pic1.jpg" /></div>
        <div>
          <div className="flex flex-col gap-5">
            <div><img className="h-[400px] w-[400px] object-cover" src="pic1.jpg" /></div>
            <div className="flex justify-between">
              <div className="uppercase font-bold text-3xl">fresh designs and bold looks</div>
              <div className="bg-pink-600 inline-flex justify-center text-center p-2 m-2 cursor-pointer">
                <div className="  font-extrabold text-4xl">+</div>

              </div>            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeUI
