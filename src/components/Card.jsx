import React from 'react';
const taskStyle = {
  backgroundColor: '#e7b9ff',
  display: 'flex',
  justifyContent: 'space-between',
  padding: 16,
  alignItems: 'center',
  width: '50%',
  margin: 40,
  height: 70,
  boxShadow: '10px 10px 10px -5px rgba(128,124,128,0.67)',
  border: 'none',
  borderRadius: '6px',
  fontFamily: 'Rubik',
  fontSize: 24,
  paddingLeft: 24,
};
const btnStyle = {
  backgroundColor: '#c1d5e0',
  width: '20%',
  fontFamily: 'Rubik',
  fontSize: 20,
  height: 70,
  boxShadow: '10px 10px 10px -5px rgba(128,124,128,0.67)',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default function Card({ todoProp, btnDelete }) {
  return (
    <div style={taskStyle}>
      <h3>{todoProp}</h3>
      <button style={btnStyle} onClick={btnDelete}>
        Delete
      </button>
    </div>
  );
}
