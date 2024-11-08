import Button from "react-bootstrap/Button";
import ModalWindow from "./ModalWindow";
import { useState } from "react";
import Card from "react-bootstrap/Card";

const Cards = ({ character }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <Card className="text-center" style={{ border: "none" }}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={character.image}
              alt={character.name}
              className="image-card"
            />
          </div>
          <div className="flip-card-back">
            {/* <h2>{character.name}</h2> */}
            <Card.Title style={{ marginTop: "30px" }}>
              {character.name}
            </Card.Title>
            <p>
              <Button
                variant="link"
                style={{ textDecoration: "none", color: "white" }}
                onClick={handleShow}
              >
                LEARN MORE
              </Button>
            </p>
          </div>
        </div>
      </div>
      <ModalWindow
        show={show}
        handleClose={handleClose}
        character={character}
      />
    </Card>
  );
};

export default Cards;
