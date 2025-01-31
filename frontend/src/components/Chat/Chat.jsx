import React from "react";
import ChatHeader from "./components/ChatHeader";
import ListOfChats from "./components/ListOfChats";
import OpenedChat from "./components/OpenedChat";
import ChatConnectionDetails from "./components/ChatConnectionDetails";
import NavBar2 from "../Navbar/Navbar2";

function Chat() {
  return (
    <div className="flex w-screen h-screen md:h-[100%] ">
      <ListOfChats />
      <OpenedChat />
      <ChatConnectionDetails />
    </div>
  );
}

export default Chat;
