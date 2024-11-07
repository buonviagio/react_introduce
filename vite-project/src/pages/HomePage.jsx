import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import ContainerOfCards from "../components/ContainerOfCards";

export default function HomePage() {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <NavigationBar handleInput={handleInput} />
      <ContainerOfCards inputValue={inputValue} />
    </div>
  );
}
