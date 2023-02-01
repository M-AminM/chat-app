import React, { useReducer, createContext, useState } from "react";
import { MessageReducer } from "./message/message.reducer";
import { ContactReducer } from "./contact/contact.reducer";

interface AppContextProviderProps extends React.PropsWithChildren {}

type ContactType = {
  id: number;
  name: string;
  lastMessage: string;
  lastMessageSent: string;
  messages: [];
};

type ContextAction<T, K> = {
  type: T;
  payload: K;
};

type Context = {
  contacts: ContactType[];
  dispatchContacts: React.Dispatch<ContextAction<any, any>>;
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  showChat: boolean;
  setShowChat: React.Dispatch<React.SetStateAction<boolean>>;
  search: ContactType[];
  setSearch: React.Dispatch<React.SetStateAction<ContactType[]>>;
};

export const AppContext = createContext<Context>({
  contacts: [],
  dispatchContacts: () => null,
  id: 1,
  setId: () => null,
  name: "Karim jan",
  setName: () => null,
  showChat: false,
  setShowChat: () => null,
  search: [],
  setSearch: () => null,
});

const InitialContact: ContactType[] = [];

const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({
  children,
}): JSX.Element => {
  const [contacts, dispatchContacts] = useReducer(
    ContactReducer,
    InitialContact
  );

  const [id, setId] = useState(1);
  const [name, setName] = useState("Jack");
  const [showChat, setShowChat] = useState(false);
  const [search, setSearch] = useState<ContactType[]>([]);

  return (
    <AppContext.Provider
      value={{
        contacts,
        dispatchContacts,
        id,
        setId,
        name,
        setName,
        showChat,
        setShowChat,
        search,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider };
