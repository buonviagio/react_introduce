import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function NavigationBar({ handleInput }) {
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
    </div>
  );
}
