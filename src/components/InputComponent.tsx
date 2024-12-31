import React from "react";

export default function InputComponent({ labelName, action }) {
  return (
    <form className="grid grid-rows-1 grid-cols-3 py-3 gap-2 col-start-1 text-background">
      <label className="col-spa w-20 h-7 col-end-1" htmlFor={labelName}>
        {labelName}
      </label>
      <input className="border-gray-500" id={labelName} type="text" />
      <button className="rounded-sm border-2 border-gray-700 px-3 w-20 h-7 hover:border-black bg-background text-black">
        {action}
      </button>
    </form>
  );
}
