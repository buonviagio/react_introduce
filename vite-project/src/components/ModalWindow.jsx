import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalWindow({ show, handleClose, character }) {
  return (
    <>
      {character && (
        <Modal show={show} onHide={handleClose}>
          <div style={{ border: "4px #a8004e solid", borderRadius: "4px" }}>
            <Modal.Header closeButton>
              <Modal.Title style={{ textAlign: "center", width: "100%" }}>
                {character.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={character.image}
                alt={character.name}
                style={{
                  display: "block",
                  width: "300px",
                  height: "300px",
                  margin: "10px auto 15px auto",
                }}
              />
              <p style={{ textAlign: "center", width: "100%" }}>
                {"Species: " + character.species}
              </p>
              <p style={{ textAlign: "center", width: "100%" }}>
                {"Status: " + character.status}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleClose}
                style={{
                  backgroundColor: "#a8004e",
                  margin: "0 auto",
                }}
              >
                Close
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      )}
    </>
  );
}
export default ModalWindow;
