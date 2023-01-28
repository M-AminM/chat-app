import React from "react";

const ChatList = () => {
  return (
    <div
      className="bg-slate-700 rounded-2xl p-4 flex flex-col gap-6 overflow-auto"
      style={{ height: "calc(100vh - 90px)" }}
    >
      <div className="flex gap-8">
        <div className="flex gap-2">
          <div className="bg-red-500 w-9 h-9 rounded-full"></div>
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
