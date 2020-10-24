import React, { useContext } from "react";
import { ModeContext } from "../../App";
import "./Info.scss";

function Info({ name, value, type }) {
  const mode = useContext(ModeContext);
  let valueComponents;

  if (type === "multiple-block") {
    valueComponents = (
      <span>
        {value.map((item) => (
          <div
            className={`multiple-block ${
              mode ? "multiple-block-dark" : "multiple-block-light"
            }`}
          >
            {item}
          </div>
        ))}
      </span>
    );
  } else if (type === "multiple") {
    valueComponents = (
      <span>
        {value.map((item) => (
          <span>{item}</span>
        ))}
      </span>
    );
  } else if (type === "object") {
    valueComponents = (
      <span>
        {value.map((item) => (
          <span className="object-info-value">{item.name}</span>
        ))}
      </span>
    );
  } else {
    valueComponents = <span className="single">{value}</span>;
  }

  return (
    <div className="info-real">
      <p>
        <b>{name}: </b>
        {valueComponents}
      </p>
    </div>
  );
}

export default Info;
