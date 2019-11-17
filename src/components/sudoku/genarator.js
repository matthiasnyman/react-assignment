// import React from 'react';
import sudoku from "sudoku";


const generateSudoku = () => {
  const raw = sudoku.makepuzzle();
  const result = { rows: [] };

  
  sudoku.solution = sudoku.solvepuzzle(raw);
  // console.log(sudoku.solution);


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

export default generateSudoku;