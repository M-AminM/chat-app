import React from "react";
import { SlMagnifier } from "react-icons/sl";

const ChatSearch = () => {
  return (
    <div className="flex bg-slate-700 items-center rounded-2xl ">
      <SlMagnifier className="ml-2 text-gray-300 cursor-pointer text-xl" />
      <input
        className="border-none outline-0 px-4 py-2 bg-slate-700 rounded-2xl w-full text-gray-300 text-sm  "
        type="text"
        placeholder="Search Chat"
      />
    </div>
  );
};

export default ChatSearch;
