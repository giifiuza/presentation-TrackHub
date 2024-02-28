import React, {useState} from "react";
import { useNavigate } from "react-router-dom"
import HeaderItem from "./HeaderItem";

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
        <div className="flex items-center justify-between p-5 bg-slate-800 mb-[50px]">
            <div className="flex  gap-8 items-center">
                {/* <img
                    src={Logo}
                    className="w-[100px] 
          md:w-[130px] object-cover"
                /> */}
                <div className="hidden content-center md:flex">
                    {menu.map((item) => (
                        <HeaderItem name={item.title} description={item.description} />
                    ))}
                </div>
                <div className="flex md:hidden gap-5">
                    {menu.map(
                        (item, index) =>
                            index < 3 && <HeaderItem name={""}  onClick={() => { navigate('/') }} />
                    )}
                    <div className="md:hidden" onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={""}  />
                        {toggle ? (
                            <div
                                className="absolute mt-3 bg-[#000000] 
              border-[1px] border-gray-700 p-3 px-5 py-4"
                            >
                                {menu.map(
                                    (item, index) =>
                                        index > 2 && (
                                            <HeaderItem name={item.title} Icon={item.description} />
                                        )
                                )}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;