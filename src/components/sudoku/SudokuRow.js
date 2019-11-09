import React from 'react';

const SudokuRow = (props) => {
  const field = props.field;
  if(field.readOnly){props.preventDefault()}

  onChange = (event) => {
    if(event.readOnly){
      const value = parsInt(event.target.value, 10)
      props.onChange({ ...event.field, value: value })
    }
  }

  return(
    <>
      <input 
        className="field" 
        value={ field.value ? field.value + 1 : undefined } 
        readOnly={field.readOnly} 
        onChange={onChange}
      />
    </>
  );
}

export default SudokuRow;