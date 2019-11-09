import React, { useState } from "react";
import sudoku from "sudoku";
import SudokuField from "./SudokuField";
import "./sudoku.scss";

const generateSoduko = () => {
  const raw = sudoku.makepuzzle();
  const result = { rows: [] };

  for (let i = 0; i < 9; i++) {
    const row = { cols: [], index: i };

    for (let j = 0; j < 9; j++) {
      const value = raw[i * 9 + j];
      const col = {
        row: i,
        col: j,
        value: value,
        readable: value !== null
      };
      row.cols.push(col);
    }
    result.rows.push(row);
  }
  return result;
}

function Sudoku() {
  
  const [ puzzle ] = useState(() => generateSoduko());

  return (
    <>
      <h1>Sudoku</h1>
      <SudokuField sudoku={ puzzle } />
      <button onClick={() => console.log(generateSoduko())}>New puzzle</button>
    </>
  );
}

export default Sudoku;
