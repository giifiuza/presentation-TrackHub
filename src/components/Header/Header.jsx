import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import Logo from '../../assets/logo.svg';

function Header() {
    const [toggle, setToggle] = useState(false);

    const menu = [
        {
            title: "Documentation",
            onClick: () => {
                window.open("https://esthers-organization-1.gitbook.io/trackhub/", "_blank");
            }
        }
    ];

    return (
        <div className="fixed top-0 left-0 w-full p-3 bg-black z-50">
            <div className="flex items-center justify-between p-5">
                <img
                    src={Logo}
                    className="w-[100px] md:w-[130px] object-cover z-50"
                />
                <div className="hidden content-center gap-16 md:flex">
                    {menu.map((item) => (
                        <HeaderItem key={item.title} name={item.title} onClick={item.onClick} />
                    ))}
                </div>
               
                <div className="flex md:hidden gap-5 items-center relative">
                    {toggle ? (
                        <div className="fixed top-0 right-0 h-full bg-[#000000] border-[1px] border-gray-700 p-3 px-5 py-4">
                            <div className="flex justify-end">
                                <HiX className="cursor-pointer" color="white" onClick={() => setToggle(false)} />
                            </div>
                            {menu.map((item) => (
                                <HeaderItem key={item.title} name={item.title} onClick={() => { item.onClick(); setToggle(false); }} />
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
