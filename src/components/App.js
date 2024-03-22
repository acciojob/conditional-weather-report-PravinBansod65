
import React from "react";
import './../styles/App.css';

const App = () => {
let input = { temperature: 25, conditions: "Sunny" };

  return (
    <div>
        {/* Do not remove the main div */}
    <p style={input.temperature > 20? {color:"red"} : {color:"blue"} }>Temperature: {input.temperature}</p>
        
    </div>
  )
}

export default App
