import React from "react";

function HeaderItem({ name, onClick }) {
  return (
    <div className="flex items-center text-[15px]  font-semibold cursor-pointer hover:underline underline-offset-8 mt-2" onClick={onClick}>
      <h2 className="text-white">{name}</h2>
    </div>
  );
}

export default HeaderItem;
