import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import Logo from '../../assets/logo.svg';

function Header() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            title: "About",
        },
        {
            title: "Documentation",
        },
        {
            title: "Team",
        },
    ];

    return (
        <div className="fixed top-0 justify-end left-0 w-full p-3 bg-black">
            <div className="flex items-center justify-between p-5">
                <img
                    src={Logo}
                    className="w-[100px] md:w-[130px] object-cover"
                />
                <div className="hidden content-center gap-16 md:flex">
                    {menu.map((item) => (
                        <HeaderItem key={item.title} name={item.title} />
                    ))}
                </div>
                <div className="hidden md:block">
                    <button className="justify-center">
                        <div className="h-10 w-full rounded-md bg-gradient-to-r from-[#9E2896] to-[#18837E] p-[1px]">
                            <div className="flex h-full w-full rounded-md items-center justify-center p-2 px-7 bg-black">
                                <h1 className="text-base font-semibold text-white">Access </h1>
                            </div>
                        </div>
                    </button>
                </div>
                <div className="flex md:hidden gap-5 items-center relative">
                    {toggle ? (
                        <div className="fixed top-0 right-0 h-full bg-[#000000] border-[1px] border-gray-700  p-3 px-5 py-4">
                            <div className="flex justify-end">
                                <HiX className="cursor-pointer" color="white" onClick={() => setToggle(false)} />
                            </div>
                            {menu.map((item) => (
                                <HeaderItem key={item.title} name={item.title} onClick={() => {  }} />
                            ))}
                        </div>
                    ) : (
                        <HiMenu className="cursor-pointer" onClick={() => setToggle(true)} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
