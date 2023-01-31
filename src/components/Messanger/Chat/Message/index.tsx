import axios from "axios";
import React, { useEffect, useContext, useRef } from "react";
import MessageDetail from "./MessageDetail";
import { AppContext } from "../../../../context/store";

interface ChatMessageProps extends React.PropsWithChildren {}

const ChatMessage: React.FunctionComponent<
  ChatMessageProps
> = (): JSX.Element => {
  const { contacts, dispatchContacts, id } = useContext(AppContext);
  const bottomRef = useRef<HTMLDivElement>(null);

  const fetchData = () => {
    axios
      .get("http://localhost:4000/contacts")
      .then((response) =>
        dispatchContacts({ type: "GET_ALL_CONTACTS", payload: response.data })
      )
      .catch((err) => console.log(err));
  };

  const messages = contacts.filter((data) => data.id === id)[0]?.messages;

  useEffect(() => {
    fetchData();
  }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages?.length]);

  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/chat-bg.png')",
      }}
      className="!bg-cover h-full w-full px-8 py-6 overflow-auto"
    >
      <ul className="flex flex-col gap-8">
        {messages?.map((message: any) => (
          <MessageDetail type={message.type} message={message.message} />
        ))}
      </ul>
      <div ref={bottomRef} />
    </div>
  );
};

export default ChatMessage;
