import React, { useState, useEffect } from "react";
import image3D from '../../assets/image.svg'

function Principal() {
    const [animation, setAnimation] = useState(false);


    return (
        <div className="grid grid-cols-2 mt-[100px] font-inter">
            <div>
                <h1 id="title" className="text-white text-7xl mt-[100px] mx-[90px] font-semibold">TrackHub</h1>
                <div id="line" className="h-2 w-[55px] mt-2 rounded bg-gradient-to-r mx-[95px] mb-8  from-[#9E2896] to-[#18837E] p-[1px]"></div>
                <h2 className="mx-[100px]  text-slate-400 text-start"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate harum placeat, veritatis voluptate earum sint laboriosam eaque. Dolores alias consequatur quos earum, repellat modi ex est provident. Rem, reprehenderit.</h2>
                <button className="justify-center mx-[100px] mt-[50px] ">
                        <div className="h-10 w-full rounded bg-gradient-to-r from-[#9E2896] to-[#18837E] p-[1px]">
                            <div className="flex h-full w-full rounded items-center justify-center p-2 px-7 hover:bg-gradient-to-r from-[#9E2896] to-[#18837E] bg-black">
                                <h1 className="text-base font-bold text-white">See now </h1>
                            </div>
                        </div>
                    </button>
            </div>
            <div className="mt-4">
                <img src={image3D} />
            </div>

        </div >
    )
}

export default Principal;
