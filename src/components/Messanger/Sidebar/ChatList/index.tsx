import axios from "axios";
import React, { useContext, useEffect } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { AppContext } from "../../../../context/store";

interface ChatListProps extends React.PropsWithChildren {}

type ContactType = {
  id: number;
  name: string;
  lastMessage: string;
  lastMessageSent: string;
};

const ChatList: React.FunctionComponent<ChatListProps> = (): JSX.Element => {
  const {
    contacts,
    dispatchContacts,
    setId,
    setName,
    id,
    setShowChat,
    search,
  } = useContext(AppContext);

  const contactsData = () => {
    axios
      .get("http://localhost:4000/contacts")
      .then((response) =>
        dispatchContacts({ type: "GET_ALL_CONTACTS", payload: response.data })
      )
      .catch((err) => console.log(err));
  };

  const clickHandler = (id1: number, contact: string) => {
    setId(id1);
    setName(contact);
    setShowChat(false);
  };

  useEffect(() => {
    contactsData();
  }, []);

  const messages: any = contacts.map((contact) => contact.messages);
  let lastMessage: any;

  lastMessage = messages.map(
    (message: any, index: number) => message[messages[index]?.length - 1]
  );

  return (
    <div className="bg-slate-700 rounded-2xl flex flex-col overflow-auto h-full">
      {(search.length === 0 ? contacts : search).map(
        (contact: ContactType, index: number) => (
          <div
            className={`flex justify-between cursor-pointer p-4 hover: duration-150 ease-in ${
              contact.id === id && "bg-slate-800"
            }`}
            key={contact.id}
            onClick={() => clickHandler(contact.id, contact.name)}
          >
            <div className="flex gap-2 ">
              <IoPersonCircleSharp className="text-4xl " color="#ff4a59" />
              <div>
                <h2 className="text-sm text-white">{contact.name}</h2>
                <p className="text-xs text-white">
                  {lastMessage[index].message}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300">{contact.lastMessageSent}</p>
          </div>
        )
      )}
    </div>
  );
};

export default ChatList;
