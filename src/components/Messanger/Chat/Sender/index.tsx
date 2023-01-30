import React, { useRef, useContext, useState } from "react";
import { MdSend } from "react-icons/md";
import axios from "axios";
import { AppContext } from "../../../../context/store";

interface ChatSenderProsp extends React.PropsWithChildren {}
const ChatSender: React.FunctionComponent<
  ChatSenderProsp
> = (): JSX.Element => {
  const inputRef: any = useRef();



  const clickHandler = () => {

    const data = {
      id: new Date().getTime(),
      name: "Me",
      message: inputRef.current.value,
      type: "reciever",
    };

    axios({
      url: "http://localhost:4000/messages",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      data: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);

        // dispatch({ type: "GET_ALL_MESSAGE", payload: response.data });
      })

      .catch((err) => {});
  };

  return (
    <div className="flex items-center bg-slate-700 pr-4 rounded-b-2xl">
      <input
        className="bg-slate-700 text-gray-300 border-none outline-0 rounded-2xl px-4 py-3 w-full"
        placeholder="what do you want to say..."
        ref={inputRef}
      />
      <MdSend
        onClick={clickHandler}
        className="text-gray-300 text-2xl cursor-pointer hover:text-blue-400 duration-150 ease-out"
      />
    </div>
  );
};

export default ChatSender;
