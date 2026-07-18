

function CommissionUI() {
    return (
        <div className="w-full h-contain p-10 text-center ">
            <div className=" w-full flex flex-col gap-1 ">
                <div className="font-extrabold text-4xl tracking-tighter">Commission A Personalized Artwork?</div>
                <div className="font-extrabold text-3xl tracking-tighter">Love this artist's style?</div>
                <div className=" font-bold tracking-tighter">Work directly with Sarah Wilson to transform your ideas into a
                    one-of-a-kind masterpiece created exclusively for you.</div>
                <div className=" flex gap-2 text-center justify-center  mt-2  rounded">
                    <div className="flex gap-2 p-3 text-sm rounded-2xl cursor-pointer bg-pink-600  text-black-600 ">
                        <div className="tracking-tighter">Explore Commission Details</div>
                        <div><img className="w-4 h-4" src="right-arrow.png" /></div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default CommissionUI
