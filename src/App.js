import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'


function App(e) {
   const[fname,setfname]=useState('');
   const[lname,setlname]=useState('');
   
   

  return (
    <div className="App">
      <header className="App-header">
        <div className='fname'>
        <label >FirstName:</label>
        <input type="text" name="Firstname"placeholder="FName" onChange={e=>setfname(e.target.value)}/>
        </div>
        <div className='lname'>
        <label>LastName:</label>
        <input type="text" name="Lastname"placeholder="LName" onChange={e=>setlname(e.target.value)} />
        </div>
    </header>
   <div className='text-output'>
   <h1>FirstName:{fname}</h1>
   <h1>LastName:{lname}</h1>
   </div>
    </div>
  );
}

export default App;
