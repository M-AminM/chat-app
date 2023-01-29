import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";

const ChatList = () => {
  return (
    <div className="bg-slate-700 rounded-2xl p-4 flex flex-col gap-6 overflow-auto h-full">
      <div className="flex justify-between">
        <div className="flex gap-2 ">
          <IoPersonCircleSharp className="text-4xl " color="#ff4a59" />
          <div>
            <h2 className="text-sm text-white">Karim Jan</h2>
            <p className="text-xs text-white">Kojaei jasem khan ?</p>
          </div>
        </div>
        <p className="text-sm text-gray-300">5/05/2022, 6:21 pm</p>
      </div>
    </div>
  );
};

export default ChatList;
