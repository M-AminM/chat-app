import React, { useRef, useState } from "react";
import { MdSend } from "react-icons/md";
import axios from "axios";

interface ChatSenderProsp extends React.PropsWithChildren {}
const ChatSender: React.FunctionComponent<
  ChatSenderProsp
> = (): JSX.Element => {
  const inputRef = useRef<any>();
  const [type, setType] = useState("");
  const name = type === "sender" ? "Karim Jan" : "Me";

  const clickHandler = () => {
    const data = {
      id: new Date().getTime(),
      name: name,
      message: inputRef.current.value,
      type: type,
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
      })

      .catch((err) => {});
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div className="flex items-center bg-slate-700 pr-4 rounded-b-2xl">
      <input
        className="bg-slate-700 text-gray-300 border-none outline-0 rounded-2xl px-4 py-3 w-full"
        placeholder="what do you want to say..."
        ref={inputRef}
      />

      <div className="pr-4">
        <div onChange={(e: any) => setType(e.target.value)}>
          <div className="flex gap-2">
            <label
              className="text-sm font-semibold text-gray-300 tracking-wider"
              htmlFor="sender"
            >
              sender
            </label>
            <input type="radio" id="sender" name="type" value="sender" />
          </div>

          <div className="flex gap-2">
            <label
              className="text-sm font-semibold text-gray-300 tracking-wider"
              htmlFor="reciever"
            >
              reciever
            </label>
            <input type="radio" id="reciever" name="type" value="reciever" />
          </div>
        </div>
      </div>
      <MdSend
        onClick={clickHandler}
        className="text-gray-300 text-2xl cursor-pointer hover:text-blue-400 duration-150 ease-out"
      />
    </div>
  );
};

export default ChatSender;
