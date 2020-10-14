import React from 'react';

function App(){
  const name = '리액트';
  return (
    <>
    { name === '리액트' ? (
        <h1>리엑트입ㄴ디ㅏ.</h1>
    ) : (
      <h2>리엑트가 아닙니다</h2>
    )}
  
    </>
  )
}

export default App;
