import React, { useState } from "react";
import image3D from '../../assets/image.svg'

function Principal() {
    return (
        <div className="grid grid-cols-2 mt-[100px]">
            <div>
                <h1 className="text-white">OIIIII</h1>
            </div>
            <div className="mt-4">
                <img src={image3D} />
            </div>

        </div>
    )
}

export default Principal;
