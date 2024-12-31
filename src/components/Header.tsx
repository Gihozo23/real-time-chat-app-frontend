import Chat from "../assets/chat";
import React from "react";
import Profile from "../assets/Profile";
import InputComponent from "./InputComponent";
export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center w-full">
        <Chat className="text-link h-6 w-6 md:h-10 md:w-12">Yappanese</Chat>
        <Profile className="text-link h-6 w-6 md:h-10 md:w-12" />
      </header>
      <div className="bg-background h-screen pt-2 ml-64 relative top-0 rounded-lg z-100 flex-col justify-around"></div>
      <div className="ml-64 ">
        <InputComponent labelName="Message" action="Send" />
        <InputComponent labelName="Room" action="Join" />
      </div>

      {/* <hr className="border-2 border-gray-600 my-6" /> */}
    </>
  );
}
