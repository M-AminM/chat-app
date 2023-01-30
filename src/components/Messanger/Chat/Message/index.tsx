import axios from "axios";
import React, { useEffect, useContext, useRef } from "react";
import MessageDetail from "./MessageDetail";
import { AppContext } from "../../../../context/store";

interface ChatMessageProps extends React.PropsWithChildren {}

const ChatMessage: React.FunctionComponent<
  ChatMessageProps
> = (): JSX.Element => {
  const { state, dispatch } = useContext(AppContext);
  const bottomRef = useRef<HTMLDivElement>(null);

  const fetchData = () => {
    axios
      .get("http://localhost:4000/messages")
      .then((response) =>
        dispatch({ type: "GET_ALL_MESSAGE", payload: response.data })
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, [state]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [state.length]);

  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/chat-bg.png')",
      }}
      className="!bg-cover h-full w-full px-8 py-6 overflow-auto"
    >
      <ul className="flex flex-col gap-8">
        {state.map((message: any) => (
          <MessageDetail type={message.type} message={message.message} />
        ))}
      </ul>
      <div ref={bottomRef} />
    </div>
  );
};

export default ChatMessage;
