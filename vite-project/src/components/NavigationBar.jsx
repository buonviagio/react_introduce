import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function NavigationBar() {
  const [inputValue, changeInputOfValue] = useState("");

  const handleInput = (event) => {
    changeInputOfValue(event.target.value);
  };

  return (
    <div className="navigation-bar-container">
      <InputGroup
        size="sm"
        className="mb-3"
        style={{ width: "200px", height: "35px" }}
      >
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{
            backgroundColor: "#a8004e",
          }}
          placeholder="Search"
          onChange={handleInput}
        />
      </InputGroup>
      <h2>{inputValue}</h2>
    </div>
  );
}
