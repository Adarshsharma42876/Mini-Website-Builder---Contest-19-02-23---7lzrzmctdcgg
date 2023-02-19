import './App.css';

// import react from "React"
import React, { useState } from "react";

import logo from './logo.svg';

function App() {
 const [data, setData] = useState("");
  return (
    <div>
     <form>
       Char limit:-<input type="number" id="charlimit-input"></input>
       <input type="text"  onChange= {(e) => setData(e.target.value)}></input>
       <input type="color"></input>
       <label for="file">
       progress:</label>
       <progress max="100">32%</progress>
     </form>
     <div className='result' style={{backgroundcolor: "red"}}>{data}</div>
    </div>
  );
}

export default App;
