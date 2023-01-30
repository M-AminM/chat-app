import React, { useReducer, createContext } from "react";
import { MessageReducer } from "./message/message.reducer";
import { ContactReducer } from "./contact/contact.reducer";

interface AppContextProviderProps extends React.PropsWithChildren {}

type MessageType = {
  id: string;
  name: string;
  message: string;
  type: string;
};

type ContactType = {
  id: number;
  name: string;
  lastMessage: string;
  lastMessageSent: string;
};

type ContextAction<T, K> = {
  type: T;
  payload: K;
};

type Context = {
  state: MessageType[];
  dispatch: React.Dispatch<ContextAction<any, any>>;
  contacts: ContactType[];
  dispatchContacts: React.Dispatch<ContextAction<any, any>>;
};

export const AppContext = createContext<Context>({
  state: [],
  dispatch: () => null,
  contacts: [],
  dispatchContacts: () => null,
});

const InitialState: MessageType[] = [];
const InitialContact: ContactType[] = [];

const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({
  children,
}): JSX.Element => {
  const [state, dispatch] = useReducer(MessageReducer, InitialState);
  const [contacts, dispatchContacts] = useReducer(
    ContactReducer,
    InitialContact
  );

  return (
    <AppContext.Provider
      value={{ state, dispatch, contacts, dispatchContacts }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider };
