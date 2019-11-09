import React from 'react';

const SudokuRow = (props) => {
  const field = props.field;
  if(field.readOnly){props.preventDefault()}

  return(
    <>
      <input 
        className="field" 
        value={ field.value ? field.value + 1 : undefined } 
        readOnly={field.readOnly} 
      />
    </>
  );
}

export default SudokuRow;