import React from "react";
import Input from "../Input/Input";
import Filter from "../Filter/Filter";
import "./InputContainer.scss";

function InputContainer() {
  return (
    <div className="input-container">
      <Input />
      <Filter />
    </div>
  );
}

export default InputContainer;
