import React, { useState, useReducer } from "react";
import "./App.css";
import { Grid } from "./roomba-grid/Grid";
import { Button } from "./roomba-button/Button";

const App = () => {
  const [roombaState, setRoombaState] = useState(1);
  const [roombaDirection, setRoombaDirection] = useState("up");

  function turnRight() {
    const roombaStates = [
      { direction: "up", next: 1 },
      { direction: "right", next: 2 },
      { direction: "down", next: 3 },
      { direction: "left", next: 0 },
    ];

    const roomba = document.querySelector("#Roomba");
    //clear all classes
    roomba.classList.remove(...roomba.classList);
    //set the class direction
    roomba.classList.add(roombaStates[roombaState].direction);
    //update the state to the next value
    setRoombaState(roombaStates[roombaState].next);
    setRoombaDirection(roombaStates[roombaState].direction);
  }

  return (
    <div>
      <Button
        id="go-forward"
        label="Go forward"
        handler={() => {
          const topBoundary = 0;
          const leftBoundary = 0;
          const bottomBoundary = 9;
          const rightBoundary = 9;
          const roomba = document.querySelector("#Roomba");

          const cellPosition = parseInt(roomba.parentElement.dataset.position);
          const colPosition = parseInt(
            roomba.parentElement.parentElement.dataset.position
          );

          if (
            (colPosition === rightBoundary && roombaDirection === "right") ||
            (colPosition === leftBoundary && roombaDirection === "left")
          ) {
            turnRight();
            return;
          }

          if (
            (cellPosition === topBoundary && roombaDirection === "up") ||
            (cellPosition === bottomBoundary && roombaDirection === "down")
          ) {
            turnRight();
            return;
          }

          let newCellPosition = cellPosition;
          let newColPosition = colPosition;

          if (roombaDirection === "up") {
            newCellPosition = cellPosition - 1;
          } else if (roombaDirection === "down") {
            newCellPosition = cellPosition + 1;
          }

          if (roombaDirection === "left") {
            newColPosition = colPosition - 1;
          } else if (roombaDirection === "right") {
            newColPosition = colPosition + 1;
          }

          const newColumn = document.querySelector(
            `[data-position='${newColPosition}'][data-type='column']`
          );

          newColumn
            .querySelector(
              `[data-position='${newCellPosition}'][data-type='cell']`
            )
            .appendChild(roomba);
        }}
      />
      <Button id="turn-right" label="Turn right" handler={turnRight} />
      <Grid />
    </div>
  );
};

export default App;
