import React from "react";
import SudokuRow from './SudokuRow';

function SudokuFild(props) {

  const { sudoku, onChange } = props;
  
  return (
    <div className="game">
      {sudoku.rows.map(rows =>
        <div className="row" key={rows.index} >
          {rows.cols.map(field => (
            <SudokuRow field={field} key={field.col} onChange={ onChange }  />  
          ))} 
        </div>
      )}
    </div>
  )
}

export default SudokuFild;

