import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const taskStyle = {
  backgroundColor: '#e7b9ff',
  display: 'flex',
  justifyContent: 'space-between',
  padding: 16,
  alignItems: 'center',
  width: '50%',
  margin: 40,
  height: 70,
  boxShadow: '10px 10px 10px -2px rgba(128,124,128,0.67)',
  border: 'none',
  borderRadius: '6px',
  fontFamily: 'Rubik',
  fontSize: 24,
  paddingLeft: 24,
  color: '#002984',
};
const btnStyle = {
  backgroundColor: '#a7c0cd',
  width: '20%',
  fontFamily: 'Rubik',
  fontSize: 20,
  height: 56,
  boxShadow: '8px 8px 8px -4px rgba(128,124,128,0.67)',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  color: '#002984',
};

export default function Card({ todoProp, btnDelete }) {
  return (
    <div style={taskStyle}>
      <div style={{ display: 'flex' }}>
        <AddCircleOutlineIcon
          style={{
            marginRight: 10,
            fontSize: 26,
            marginTop: 5,
            color: '#002984',
          }}
        />
        <h3> {todoProp}</h3>
      </div>
      <button style={btnStyle} onClick={btnDelete}>
        Delete
      </button>
    </div>
  );
}
