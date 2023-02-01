import React, { useContext } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { AppContext } from "../../../../../context/store";

interface MessageDetailProps extends React.PropsWithChildren {
  type: string;
  message: string;
}

type LookupType = {
  sender: (message: { message: string }) => JSX.Element;
  reciever: (message: { message: string }) => JSX.Element;
};

const Sender = (message: { message: string }) => {
  const { name } = useContext(AppContext);
  return (
    <li className="flex gap-2 w-full">
      <div className="text-4xl">
        <IoPersonCircleSharp color="#ff4a59" />
      </div>
      <div className="bg-white rounded-lg p-1 w-80 lg:w-64 md:!w-full">
        <h3 className="font-semibold text-sm">{name}</h3>
        <p className="text-xs">{message.message}</p>
      </div>
    </li>
  );
};

const Reciever = (message: { message: string }) => {
  return (
    <li className="flex  justify-end gap-2 w-full ">
      <div className="bg-green-400 rounded-lg p-1 w-80 lg:w-64 md:!w-full">
        <h3 className="font-semibold text-sm">Me</h3>
        <p className="text-xs">{message.message}</p>
      </div>
      <div className="text-4xl">
        <IoPersonCircleSharp color="#ff4a59" />
      </div>
    </li>
  );
};

const lookup: LookupType = {
  sender: Sender,
  reciever: Reciever,
};

const MessageDetail: React.FunctionComponent<MessageDetailProps> = ({
  type,
  message,
}): JSX.Element => {
  const Message = lookup[type as keyof LookupType];

  return (
    <div>
      <Message message={message} />
    </div>
  );
};

export default MessageDetail;
