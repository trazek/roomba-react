import React from "react";
import "./Grid.css";

const GRID_SIZE = 10;

const columns = Array(GRID_SIZE).fill(true);
const rows = Array(GRID_SIZE).fill(true);

const randomX = Math.floor(Math.random() * 10);
const randomY = Math.floor(Math.random() * 10);

export function Grid() {
  return (
    <div className="Grid">
      {columns.map((_, columnIdx) => {
        return (
          <div
            className="Column"
            data-position={columnIdx}
            data-type="column"
            key={`col-${columnIdx}`}
          >
            {rows.map((_, cellIdx) => (
              <div
                className="Cell"
                data-position={cellIdx}
                data-type="cell"
                key={`cell-${cellIdx}`}
              >
                {columnIdx === randomY && cellIdx === randomX ? (
                  <div id="Roomba" className="Roomba">
                    👆🏿
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
