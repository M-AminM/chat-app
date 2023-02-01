import React, { useContext } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { BsCameraVideo } from "react-icons/bs";
import { CgMoreVertical } from "react-icons/cg";
import { IoPersonCircleSharp } from "react-icons/io5";
import { AppContext } from "../../../../context/store";

interface ChatHeaderProps extends React.PropsWithChildren {}
const ChatHeader: React.FunctionComponent<
  ChatHeaderProps
> = (): JSX.Element => {
  const { name } = useContext(AppContext);
  return (
    <div className="flex justify-between items-center w-full bg-slate-700 p-4 rounded-t-2xl">
      <div className="flex gap-2">
        <IoPersonCircleSharp className="text-4xl " color="#ff4a59" />
        <div>
          <h3 className="text-sm text-white">{name}</h3>
          <p className="text-xs text-gray-300">Last seen recently</p>
        </div>
      </div>

      <div className="flex gap-4">
        <AiOutlinePhone className="text-xl text-blue-400 cursor-pointer" />
        <BsCameraVideo className="text-xl text-blue-400 cursor-pointer" />
        <CgMoreVertical className="text-lg text-blue-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default ChatHeader;
