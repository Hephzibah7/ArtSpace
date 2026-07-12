import type { NavBarUIProps } from "../types"
import { motion } from "framer-motion"
import { fadeDown, fadeLeft, fadeRight, fadeUp, slow, fast, spring, hoverCard, tap } from "../animations"
function NavBarUI({ navCheck, setNavCheck }: NavBarUIProps) {
    return (
        <div className="">
            {navCheck == false ? (
                <div className="lg:hidden w-full h-contain p-2 cursor-pointer" onClick={() => setNavCheck(true)}><img className="w-10" src="burger-bar.png" /></div>

            )
                :
                (
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        transition={fast}
                        className="lg:hidden w-full h-screen p-5 bg-black absolute z-10 text-white">
                        <div className="flex justify-between">
                            <div className="uppercase text-3xl font-bold tracking-tighter"><span className="text-pink-600">A</span>rtspace</div>
                            <div className="flex gap-2">
                                <div><img className="w-7 cursor-pointer " src="off-button.png" /></div>
                                <div onClick={() => setNavCheck(false)}><img className="w-5 cursor-pointer" src="remove.png" /></div>
                            </div>

                        </div>
                        <div className="mt-20 flex flex-col gap-5 text-xl font-bold">
                            <motion.div
                            whileTap={tap}
                            transition={spring}
                            className="underline decoration-pink-600 underline-offset-2 cursor-pointer">Home</motion.div>
                            <motion.div
                            whileTap={tap}
                            transition={spring}
                            className="underline decoration-pink-600 underline-offset-2 cursor-pointer">Artists</motion.div>
                            <motion.div
                            whileTap={tap}
                            transition={spring}
                             className="underline decoration-pink-600 underline-offset-2 cursor-pointer">Commissions</motion.div>
                            <motion.div
                            whileTap={tap}
                            transition={spring}
                            className="underline decoration-pink-600 underline-offset-2 cursor-pointer">About</motion.div>
                        </div>
                        <motion.div
                            whileTap={tap}
                            transition={spring}
                            className="absolute bottom-10 font-bold text-white cursor-pointer underline decoration-pink-600 underline-offset-2 uppercase">Signup</motion.div>

                    </motion.div>
                )}

            <motion.div
                variants={fadeDown}
                initial="hidden"
                whileInView="visible"
                transition={slow}
                className="hidden lg:flex bg-black w-full h-contain p-3 text-white flex justify-between ">
                <div className="uppercase font-bold tracking-tighter text-3xl"><span className="text-pink-600">A</span>rtSpace</div>
                <div className="flex gap-5 font-bold ">
                    <motion.div
                        whileTap={tap}
                        transition={spring}
                        className="border border-pink-600 p-2 pl-4 pr-4 rounded cursor-pointer">Home</motion.div>
                    <motion.div
                        whileTap={tap}
                        transition={spring}
                        className="border border-pink-600 p-2 pl-4 pr-4 rounded cursor-pointer">Artists</motion.div>
                    <motion.div
                        whileTap={tap}
                        transition={spring}
                        className="border border-pink-600 p-2 pl-4 pr-4 rounded cursor-pointer">Commissions</motion.div>
                    <motion.div
                        whileTap={tap}
                        transition={spring}
                        className="border border-pink-600 p-2 pl-4 pr-4 rounded cursor-pointer">About</motion.div>
                </div>
                <div>
                    <div className="absolute top-5 bg-pink-600 p-2 rounded"><img className=" w-4" src="magnifying-glass.png" /> </div>
                    <div><input className="lg:w-[200px] xl:w-[400px] rounded p-1 mt-2 placeholder:absolute placeholder:left-10" placeholder="Nature" /></div>
                </div>
                <div className="flex gap-5">
                    <div><img className="w-10 cursor-pointer " src="off-button.png" /></div>
                    <motion.div
                        whileTap={tap}
                        transition={spring}
                        className="font-bold text-white cursor-pointer  border border-pink-600 rounded p-2 uppercase">Signup</motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default NavBarUI
