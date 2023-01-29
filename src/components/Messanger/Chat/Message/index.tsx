import React from "react";
import MessageDetail from "./MessageDetail";

interface ChatMessageProps extends React.PropsWithChildren {}
const ChatMessage: React.FunctionComponent<
  ChatMessageProps
> = (): JSX.Element => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/chat-bg.png')",
      }}
      className="!bg-cover h-full w-full px-8 py-6 overflow-auto"
    >
      <ul className="flex flex-col gap-8">
        <MessageDetail type="sender" />
        <MessageDetail type="reciever" />
        <MessageDetail type="reciever" />
        <MessageDetail type="sender" />
        <MessageDetail type="reciever" />
      </ul>
    </div>
  );
};

export default ChatMessage;
