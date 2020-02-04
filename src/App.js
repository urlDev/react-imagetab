import React from "react";
import "./App.scss";
import Top from "./Components/Top/Top.jsx"
import Bottom from "./Components/Bottom/Bottom.jsx"
import Time from "./Components/Time/Time.jsx"
import User from "./Components/User/User.jsx"
import Download from "./Components/Download/Download.jsx"

function App() {
  return (
    <div className="App">
    <Top/>
    <Bottom/>
    <Time/>
    <User/>
    <Download/>
    </div>
  );
}

export default App;
