
import React from "react";
import './../styles/App.css';

const App = () => {
let input = { temperature: 25, conditions: "Sunny" };

  return (
    <div>
        {/* Do not remove the main div */}
    <h2  style={input.temperature > 20? {color:"red"} : {color:"blue"} }> temperature : { input.temperature} </h2>
        
    </div>
  )
}

export default App
