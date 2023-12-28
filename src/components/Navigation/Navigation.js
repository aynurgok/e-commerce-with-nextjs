import React from "react";
import "../Navigation/Navigation.css";

const Navigation = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-center gap-4">
        <button className="categorie-btns bg-blue-200 hover:bg-blue-400 hidden md:inline-block lg:inline-block md:w-1/6 lg:w-1/6">All</button>
        <button className="categorie-btns bg-blue-200 hover:bg-blue-400 hidden md:inline-block lg:inline-block md:w-1/6 lg:w-1/6">Jewelery</button>
        <button className="categorie-btns bg-blue-200 hover:bg-blue-400 hidden md:inline-block lg:inline-block md:w-1/6 lg:w-1/6"> Clothes</button>
        <button className="categorie-btns bg-blue-200 hover:bg-blue-400 hidden md:inline-block lg:inline-block md:w-1/6 lg:w-1/6">Electronics</button>
        <button title="filter" className="filter block md:hidden flex">
        <svg viewBox="0 0 512 512" className="h-4 w-4">
          <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"></path>
        </svg>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
