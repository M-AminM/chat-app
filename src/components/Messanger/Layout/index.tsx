import React from "react";
import ChatHeader from "../Chat/Header";
import ChatMessage from "../Chat/Message";
import ChatSender from "../Chat/Sender";
import ChatList from "../Sidebar/ChatList";
import ChatSearch from "../Sidebar/Search";

const Layout = () => {
  return (
    <div className="flex justify-center items-center gap-10">
      <div>
        <ChatSearch />
        <ChatList />
      </div>
      <div>
        <ChatHeader />
        <ChatMessage />
        <ChatSender />
      </div>
    </div>
  );
};

export default Layout;
