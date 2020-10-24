import React from "react";
import Input from "../Input/Input";
import Filter from "../Filter/Filter";
import "./InputContainer.scss";

function InputContainer({
  inputVal,
  onInputChange,
  filterVal,
  onFilterChange,
}) {
  return (
    <div className="input-container">
      <Input inputVal={inputVal} onInputChange={onInputChange} />
      <Filter filterVal={filterVal} onFilterChange={onFilterChange} />
    </div>
  );
}

export default InputContainer;
