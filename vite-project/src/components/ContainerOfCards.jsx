import { Fragment, useEffect, useState } from "react";
import Card from "./Card";
import SpinnerToDisplay from "./SpinnerToDisplay";

const ContainerOfCards = () => {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/"
      );
      const resolt = await response.json();
      setData(resolt.results);
    } catch (error) {
      console.log("error :>> ", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex-container">
      {data.length === 0 && (
        <>
          <SpinnerToDisplay />
        </>
      )}
      {data.length > 0 &&
        data.map((item) => {
          return (
            <>
              <Card character={item} />
            </>
          );
        })}
    </div>
  );
};

export default ContainerOfCards;
