import React from 'react';
import './App.css';

function App(){
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48',
    fontWeight: 'bold',
    padding: 16
  }
return <div style={style}>{name || '리액트'}</div>;
}

export default App;
