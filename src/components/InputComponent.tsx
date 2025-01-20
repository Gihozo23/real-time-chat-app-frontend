import React from "react";

export default function InputComponent({ labelName, action }) {
  return (
    <form className="grid grid-rows-1 grid-cols-3 py-3 gap-2 col-start-1 w-auto">
      <label
        className="col-spa w-20 h-7 col-end-1 text-background"
        htmlFor={labelName}
      >
        {labelName}
      </label>
      <input
        className="border-gray-500 text-black w-[50vh] hover:outline-link focus:bg-transparent focus:text-background"
        id={labelName}
        type="text"
      />
      <button className="rounded-sm border-2 col-start-3 border-background px-3 w-20 h-7 hover:border-link hover:bg-link bg-background text-black">
        {action}
      </button>
    </form>
  );
}
