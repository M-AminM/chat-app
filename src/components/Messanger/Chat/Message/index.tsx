import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import MessageDetail from "./MessageDetail";
import { AppContext } from "../../../../context/store";

interface ChatMessageProps extends React.PropsWithChildren {}

type DataType = {
  id: string;
  name: string;
  message: string;
  type: string;
};

const ChatMessage: React.FunctionComponent<
  ChatMessageProps
> = (): JSX.Element => {
  const [data, setData] = useState<DataType[]>([]);
  const { state, dispatch } = useContext(AppContext);

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
    </div>
  );
};

export default ChatMessage;
