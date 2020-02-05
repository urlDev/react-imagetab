
//how to make an extension
//https://levelup.gitconnected.com/how-to-use-react-js-to-create-chrome-extension-in-5-minutes-2ddb11899815
// INLINE_RUNTIME_CHUNK=false npm run build for making it compatible as an extension
import React from "react";
import "./App.scss";
import Top from "./Components/Top/Top.jsx";
import Bottom from "./Components/Bottom/Bottom.jsx";
import Time from "./Components/Time/Time.jsx";
import User from "./Components/User/User.jsx";
import Download from "./Components/Download/Download.jsx";
import DefaultButton from "./Components/DefaultButton/DefaultButton.jsx";

function App() {
  return (
    <div className="App">
      <Top />
      <Bottom />
      <Time />
      <User />
      <Download />
      {/* <DefaultButton /> */}
    </div>
  );
}

export default App;
