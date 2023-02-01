import React, { useRef, useState, useContext, useEffect } from "react";
import { MdSend } from "react-icons/md";
import axios from "axios";
import { AppContext } from "../../../../context/store";

interface ChatSenderProsp extends React.PropsWithChildren {}
type DataType = {
  id: string;
  name: string;
  message: string;
  type: string;
};
const ChatSender: React.FunctionComponent<
  ChatSenderProsp
> = (): JSX.Element => {
  const { id, contacts } = useContext(AppContext);
  const [myArray, setMyArray] = useState<any>();
  const [click, setClick] = useState(false);
  let messages: DataType[] = contacts.filter((data) => data.id === id)[0]
    ?.messages;
  let nameChat = contacts.filter((data) => data.id === id)[0]?.name;

  useEffect(() => {
    // if (messages !== undefined) {
    //   setMyArray(messages);
    //   return;
    // }
    if (messages?.length !== undefined) {
      setMyArray(messages);
    }
    console.log(messages?.length !== undefined);
  }, [messages?.length !== undefined, messages?.length]);

  const inputRef = useRef<any>();
  const [input, setInput] = useState("");
  const [sender, setSender] = useState(false);
  const name = sender ? nameChat : "Me";
  const type = sender ? "sender" : "reciever";

  const clickHandler = () => {
    if (input) {
      setClick(true);
      const data = {
        id: new Date().getTime(),
        name: name,
        message: input,
        type: type,
      };
      setMyArray([...myArray, data]);
      console.log(myArray);

      // axios({
      //   url: `http://localhost:4000/contacts/${id}`,
      //   method: "PUT",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   data: JSON.stringify(data1),
      // })
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((err) => {});
      // inputRef.current.value = "";
      // inputRef.current.focus();
    } else {
      window.alert("Write your message !!!");
    }
  };

  useEffect(() => {
    if (click) {
      const data1 = {
        id: id,
        name: nameChat,
        lastMessage: ":D",
        lastMessageSent: "5/05/2022, 6:21 pm",
        messages: myArray,
      };
      axios({
        url: `http://localhost:4000/contacts/${id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data1),
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {});
      setClick(false);
      setInput("");
    }
  }, [click]);
  return (
    <div className="flex items-center bg-slate-700 pr-4 rounded-b-2xl">
      <input
        className="bg-slate-700 text-gray-300 border-none outline-0 rounded-2xl px-4 py-3 w-full"
        placeholder="what do you want to say..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        onClick={() => setSender(!sender)}
        className={`border-none outline-0 px-4 py-2 bg-gray-400 text-sm rounded-3xl mr-2 duration-150 ease-in ${
          sender ? "bg-blue-400 text-white" : ""
        }`}
      >
        {sender ? "Sender" : "Reciever"}
      </button>
      <MdSend
        onClick={clickHandler}
        className="text-gray-300 text-2xl cursor-pointer hover:text-blue-400 duration-150 ease-out"
      />
    </div>
  );
};

export default ChatSender;
