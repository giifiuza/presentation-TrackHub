// Principal.js
import React from "react";
import image3D from "../../assets/image.svg";

function Principal() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pl-4 gap-8 mt-20 md:mt-[100px] font-inter">
      <div className="flex flex-col justify-center z-0">
        <h1
          id="title"
          className="text-white text-5xl mb-2 md:text-7xl mt-8 md:mt-0 mx-4 md:mx-[90px] font-semibold md:mb-2"
        >
          TrackHub
        </h1>
        <div
          id="line"
          className="h-2 w-[55px] rounded bg-gradient-to-r mx-4 md:mx-[95px] mb-8 from-[#9E2896] to-[#18837E] p-[1px]"
        ></div>
        <h2 className="mx-4 md:mx-[100px] text-slate-400 text-justify md:text-left">
          A platform for monitoring project material, giving apprentices the
          autonomy to centralize their tasks and projects in just one place,
          without the risk of unwanted changes and with guarantees in the
          organization. The TrackHub platform makes organizing and dividing your
          project tasks easy and efficient
        </h2>
        <button
          onClick={() => {
            window.open(
              "https://esthers-organization-1.gitbook.io/trackhub/",
              "_blank"
            );
          }}
          className="flex justify-start pl-4 mx-4 md:mx-[100px] mt-4 md:mt-[50px]"
        >
          <div className="h-[50px] w-[140px] md:w-[130px] rounded bg-gradient-to-r from-[#9E2896] to-[#18837E] p-[1px]">
            <div className="flex h-full w-full rounded items-center justify-center p-2 px-5 hover:bg-gradient-to-r from-[#9E2896] to-[#18837E] bg-black">
              <h1 className="text-sm md:text-base font-bold w-full text-white">
                See now
              </h1>
            </div>
          </div>
        </button>
      </div>
      <div className="flex flex-col justify-center md:mt-4">
        <img src={image3D} alt="3D Image" className="max-w-full md:max-w-md" />
      </div>
    </div>
  );
}

export default Principal;
