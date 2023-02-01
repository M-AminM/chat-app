import React, { useContext } from "react";
import { AppContext } from "../../../context/store";
import ChatHeader from "../Chat/Header";
import ChatMessage from "../Chat/Message";
import ChatSender from "../Chat/Sender";
import ChatList from "../Sidebar/ChatList";
import ChatSearch from "../Sidebar/Search";

interface MessangerLayoutProps extends React.PropsWithChildren {}
const Layout: React.FunctionComponent<
  MessangerLayoutProps
> = (): JSX.Element => {
  const { showChat } = useContext(AppContext);
  return (
    <div className="flex justify-center items-center gap-4 h-full w-full">
      <div
        className={`h-full flex flex-col gap-2  flex-[0_0_350px] lg:flex-[0_0_280px] sm:!flex-1 ${
          !showChat && "sm:hidden "
        }`}
      >
        <ChatSearch />
        <ChatList />
      </div>
      <div
        className={`h-full flex flex-col w-3/5 sm:w-full ${
          showChat && "sm:hidden"
        }`}
      >
        <ChatHeader />
        <ChatMessage />
        <ChatSender />
      </div>
    </div>
  );
};

export default Layout;
