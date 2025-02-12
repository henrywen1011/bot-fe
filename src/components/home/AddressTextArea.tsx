import React, { useRef, useState } from "react";
import styles from "./home.module.scss";

const AddressTextArea = () => {
  const [inputValue, setInputValue] = useState("");

  // Function to split the text area value into lines
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  // Split the text area value by new lines and map over each line to render the index
  const lines = inputValue.split("\n");

  const textAreaRef: any = useRef(null);

  return (
    <div
      onClick={() => {
        if (textAreaRef.current) {
          textAreaRef.current.focus();
        }
      }}
      className={
        styles.addressContainer +
        " border rounded-l-[0.5rem] border-[#14F195] overflow-hidden"
      }
    >
      <div className="flex gap-2 h-[15rem] relative overflow-auto scrollbar-none inputField">
        <div className="flex flex-col absolute left-0 h-max px-2 bg-[#353535]">
          {lines.map((_, index) => (
            <p key={index} className="p-2">
              {index + 1}
            </p>
          ))}
        </div>
        <textarea
          ref={textAreaRef}
          spellCheck="false"
          className={
            styles.inputField +
            " leading-10 pl-[2rem] h-max overflow-hidden resize-none"
          }
          value={inputValue}
          onChange={handleInputChange}
          rows={lines.length || 1} // Dynamically adjust rows based on number of lines
        />
      </div>
    </div>
  );
};

export default AddressTextArea;
