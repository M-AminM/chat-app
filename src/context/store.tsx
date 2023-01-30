import React, { useReducer, createContext } from "react";
import { MessageReducer } from "./message/message.reducer";

interface AppContextProviderProps extends React.PropsWithChildren {}

type MessageType = {
  id: string;
  name: string;
  message: string;
  type: string;
};

const InitialState: MessageType[] = [];

export const AppContext = createContext<any>({
  state: [],
  dispatch: () => null,
});

const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({
  children,
}): JSX.Element => {
  const [state, dispatch] = useReducer(MessageReducer, InitialState);

  return (
    <AppContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider };
