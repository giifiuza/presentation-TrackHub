import React, { useState, useEffect } from "react";
import image3D from '../../assets/image.svg'

function Principal() {
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    // useEffect(() => {
    //     // Executar a animação apenas uma vez
    //     if (!isAnimationComplete) {
    //       // Obter a largura do título
    //       const title = document.getElementById('title');
    //       const titleWidth = title.offsetWidth;

    //       // Criar uma animação GSAP para mover o traço
    //       gsap.to('#line', {
    //         duration: 1,
    //         width: titleWidth,
    //         onComplete: () => setIsAnimationComplete(true), // Definir a animação como completa quando terminar
    //       });
    //     }
    //   }, [isAnimationComplete]);
    return (
        <div className="grid grid-cols-2 mt-[100px]">
            <div>
                <h1 className="text-white text-7xl mt-[100px] mx-[90px]">TrackHub</h1>
                {/* <div className="h-1 bg-black mt-2" id="line"></div> */}
                <h2 className="mx-[100px]  text-slate-400"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate harum placeat, veritatis voluptate earum sint laboriosam eaque. Dolores alias consequatur quos earum, repellat modi ex est provident. Rem, reprehenderit.</h2>
                <button className="justify-center mx-[100px] mt-[50px] ">
                        <div className="h-10 w-full rounded-md bg-gradient-to-r from-[#9E2896] to-[#18837E] p-[1px]">
                            <div className="flex h-full w-full rounded-md items-center justify-center p-2 px-7 hover:bg-gradient-to-r from-[#9E2896] to-[#18837E] bg-black">
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
