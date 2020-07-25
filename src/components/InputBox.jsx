import React from 'react';

const inputStyle = {
  backgroundColor: '#eceff1',
  width: '50%',
  margin: 20,
  height: 70,
  boxShadow: '10px 10px 10px -5px rgba(128,124,128,0.67)',
  border: 'none',
  borderRadius: '6px',
  fontFamily: 'Rubik',
  fontSize: 20,
  paddingLeft: 24,
  cursor: 'pointer',
};

export default function InputBox({ placeholderPrp, valueProp, onChangeProp }) {
  return (
    <input
      style={inputStyle}
      placeholder={placeholderPrp}
      type='text'
      value={valueProp}
      onChange={onChangeProp}
    ></input>
  );
}
