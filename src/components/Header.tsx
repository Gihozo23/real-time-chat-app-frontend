import Chat from "../assets/Chat";
import React from "react";
import Profile from "../assets/Profile";
import InputComponent from "./InputComponent";
export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center w-full mb-10">
        <Chat className="text-link h-6 w-6 md:h-10 md:w-12">Yappanese</Chat>
        <Profile className="text-link h-6 w-6 md:h-10 md:w-12" />
      </header>
      <div className="bg-background mx-2 h-[50vh] pt-2 relative top-0 rounded-lg z-100 flex-col justify-around mb-10"></div>
      <div className="mx-2 w-full flex justify-between">
        <InputComponent labelName="Message" action="Send" />
        <InputComponent labelName="Room" action="Join" />
      </div>
    </>
  );
}
