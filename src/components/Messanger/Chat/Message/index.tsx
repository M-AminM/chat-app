import React from "react";

interface ChatMessageProps extends React.PropsWithChildren {}
const ChatMessage: React.FunctionComponent<
  ChatMessageProps
> = (): JSX.Element => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/chat-bg.png')",
      }}
      className="!bg-cover h-full w-full"
    ></div>
  );
};

export default ChatMessage;
