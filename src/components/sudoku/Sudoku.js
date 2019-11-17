import React, { useState } from "react";
import SudokuField from "./SudokuField";
import generateSudoku from "./genarator";
import CheckSudoku from './checkSudoku';
import "./sudoku.scss";


function Sudoku() {
  const [sudoku, setSudoku] = useState(()=> generateSudoku());

  const handleChange = e => {

    const data = sudoku;
    data.rows[e.row].cols[e.col].value = e.value;
    setSudoku(data);
    CheckSudoku(e, sudoku);
  }

  return (
    <>
      <h1>Sudoku</h1>
      <SudokuField sudoku={ sudoku } onChange={ handleChange } />
      <button>New puzzle</button>
      {/* <button onClick={solveSudoku}>Solve puzzle</button> */}
    </>
  );
}

export default Sudoku;
