import React, { useReducer, createContext } from "react";
import { MessageReducer } from "./message/message.reducer";

interface AppContextProviderProps extends React.PropsWithChildren {}

type MessageType = {
  id: string;
  name: string;
  message: string;
  type: string;
};

type ContextAction<T, K> = {
  type: T;
  payload: K;
};

type Context = {
  state: MessageType[];
  dispatch: React.Dispatch<ContextAction<any, any>>;
};

export const AppContext = createContext<Context>({
  state: [],
  dispatch: () => null,
});

const InitialState: MessageType[] = [];

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
