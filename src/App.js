import React from "react";
import "./App.scss";
import Top from "./Components/Top/Top.jsx"
import Bottom from "./Components/Bottom/Bottom.jsx"
import Time from "./Components/Time/Time.jsx"

function App() {
  return (
    <div className="App">
    <Top/>
    <Bottom/>
    <Time/>
    </div>
  );
}

export default App;
