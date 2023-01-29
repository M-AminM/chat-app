import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";

interface MessageDetailProps extends React.PropsWithChildren {
  type: string;
}

type LookupType = {
  sender: () => JSX.Element;
  reciever: () => JSX.Element;
};

const Sender = () => {
  return (
    <li className="flex gap-2 w-full">
      <div className="text-4xl">
        <IoPersonCircleSharp color="#ff4a59" />
      </div>
      <div className="bg-white rounded-lg p-1 w-80">
        <h3 className="font-semibold text-sm">Karim Jan</h3>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
          officiis consequatur odio rerum sapiente et? Impedit error
          exercitationem fugiat neque? Quasi autem suscipit architecto?
          Cupiditate quia fugit minus blanditiis? Doloremque?
        </p>
      </div>
    </li>
  );
};

const Reciever = () => {
  return (
    <li className="flex  justify-end gap-2 w-full ">
      <div className="bg-green-400 rounded-lg p-1 w-80">
        <h3 className="font-semibold text-sm">Me</h3>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
          officiis consequatur odio rerum sapiente et? Impedit error
          exercitationem fugiat neque? Quasi autem suscipit architecto?
          Cupiditate quia fugit minus blanditiis? Doloremque?
        </p>
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
}): JSX.Element => {
  const Message = lookup[type as keyof LookupType];

  return (
    <div>
      <Message />
    </div>
  );
};

export default MessageDetail;
