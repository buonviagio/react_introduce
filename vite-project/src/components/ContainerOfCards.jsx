import { useEffect, useState } from "react";
import Cards from "./Cards";
import SpinnerToDisplay from "./SpinnerToDisplay";

const ContainerOfCards = ({ inputValue, pageNumber }) => {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/?page=" + pageNumber
      );
      const resolt = await response.json();
      setData(resolt.results);
    } catch (error) {
      console.log("error :>> ", error);
    }
  }

  useEffect(() => {
    getData();
  }, [pageNumber]);

  const filteredData = data.filter((character) =>
    character.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="flex-container">
      {filteredData.length === 0 ? (
        <SpinnerToDisplay />
      ) : (
        filteredData.map((item) => <Cards key={item.id} character={item} />)
      )}
    </div>
  );
};

export default ContainerOfCards;
