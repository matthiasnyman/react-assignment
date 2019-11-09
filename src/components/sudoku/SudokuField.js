import React from "react";
import SudokuRow from './SudokuRow';

function SudokuFild(props) {

  const { sudoku } = props;
  
  return (
    <div className="game">
      {sudoku.rows.map(rows =>
        <div className="row" key={rows.index} >
          {rows.cols.map(field => (
            <SudokuRow field={field} key={field.col}  />  
          ))} 
        </div>
      )}
    </div>
  )
}

export default SudokuFild;

