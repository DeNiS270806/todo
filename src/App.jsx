import { useState } from 'react';

import './App.css';

function App() {
  const [cnt,setCnt]=useState(0);
  function add(){
    setCnt(cnt+1);
  }
  return (
    <div className="App">
   <header className="header">Click Counter</header>
   <button onClick={add} className='btn'>Câcățel</button>
   <h1 className="nrap">Nr apasari: {cnt}</h1>
    </div>
  );
}

export default App;
