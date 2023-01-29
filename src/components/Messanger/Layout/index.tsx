import React from "react";
import ChatHeader from "../Chat/Header";
import ChatMessage from "../Chat/Message";
import ChatSender from "../Chat/Sender";
import ChatList from "../Sidebar/ChatList";
import ChatSearch from "../Sidebar/Search";

interface MessangerLayoutProps extends React.PropsWithChildren {}
const Layout: React.FunctionComponent<
  MessangerLayoutProps
> = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center gap-8 h-full w-full">
      <div className="h-full flex flex-col gap-2  flex-[0_0_350px]">
        <ChatSearch />
        <ChatList />
      </div>
      <div className="h-full flex flex-col  w-3/5">
        <ChatHeader />
        <ChatMessage />
        <ChatSender />
      </div>
    </div>
  );
};

export default Layout;
