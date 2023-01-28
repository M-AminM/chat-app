import React from "react";
import { SlMagnifier } from "react-icons/sl";

const ChatSearch = () => {
  return (
    <div className="flex bg-slate-700 items-center rounded-2xl my-4 ">
      <SlMagnifier className="ml-2 text-gray-300 cursor-pointer" />
      <input
        className="border-none outline-0 px-4 py-2 bg-slate-700 rounded-2xl w-full text-gray-300"
        type="text"
        placeholder="Search Chat"
      />
    </div>
  );
};

export default ChatSearch;
