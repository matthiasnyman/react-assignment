import React from 'react';

const SudokuRow = (props) => {
  const field = props.field;

  
  const handleChange = e => {
    if(!field.readable){
      const newValue = e.target.value === isNaN ? "" : parseInt(e.target.value, 10);
      props.onChange({...field, value: newValue});

    }else{
      e.preventDefault()
      return;
    }
  };

  return(
    <>
      <input 
        className="field" 
        value={ field.value ? field.value + 1 : undefined } 
        readOnly={field.readOnly} 
        onChange={ handleChange }
        maxLength="1"
      />
    </>
  );
}

export default SudokuRow;