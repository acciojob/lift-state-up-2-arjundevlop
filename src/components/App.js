
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [inputValue, setinputValue] = useState("");
  return (
    <div className="parent"><h1>Parent Component</h1>{inputValue}
    <div className="child">
    <h2>Child Component</h2>
      <input type="text" value={inputValue} onChange={(e)=>{setinputValue(e.target.value)}} />
    </div>
        
    </div>
  )
}

export default App
