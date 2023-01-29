import React from "react";
import { MdSend } from "react-icons/md";

interface ChatSenderProsp extends React.PropsWithChildren {}
const ChatSender: React.FunctionComponent<
  ChatSenderProsp
> = (): JSX.Element => {
  return (
    <div className="flex items-center bg-slate-700 pr-4 rounded-b-2xl">
      <input
        className="bg-slate-700 text-gray-300 border-none outline-0 rounded-2xl px-4 py-3 w-full"
        placeholder="what do you want to say..."
      />
      <MdSend className="text-gray-300 text-2xl cursor-pointer hover:text-blue-400 duration-150 ease-out" />
    </div>
  );
};

export default ChatSender;
