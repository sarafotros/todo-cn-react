import React from 'react';

const btnStyle = {
  backgroundColor: '#c1d5e0',
  width: '10%',
  fontFamily: 'Rubik',
  fontSize: 20,
  height: 70,
  boxShadow: '10px 10px 10px -5px rgba(128,124,128,0.67)',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default function BtnApp({ onSubmitBtn }) {
  return (
    <button style={btnStyle} onClick={onSubmitBtn}>
      Submit
    </button>
  );
}
