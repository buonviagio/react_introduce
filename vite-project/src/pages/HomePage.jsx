import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import ContainerOfCards from "../components/ContainerOfCards";
import Footer from "../components/Footer";

export default function HomePage() {
  // user's input for method search
  const [inputValue, setInputValue] = useState("");

  // Pagination
  let [pageNumber, setPageNumber] = useState(1);

  const handlePageChange = (e) => {
    const buttonForward = "arrow_forward_ios";
    const buttonBack = "arrow_back_ios";
    const valueOfButton = e.target.innerText;

    if (valueOfButton === buttonBack && pageNumber > 1 && pageNumber <= 10) {
      setPageNumber(--pageNumber);
    } else if (
      valueOfButton === buttonForward &&
      pageNumber >= 1 &&
      pageNumber < 10
    ) {
      setPageNumber(++pageNumber);
    }
  };

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="page-container">
      <NavigationBar handleInput={handleInput} />
      <ContainerOfCards inputValue={inputValue} pageNumber={pageNumber} />
      <Footer handlePageChange={handlePageChange} pageNumber={pageNumber} />
    </div>
  );
}
