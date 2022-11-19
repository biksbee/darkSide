import React, {useState} from "react"

import StartPopUp from "./components/popUp/startPopUP"
import Header from "./components/Header"
import Body from "./components/body"
import Footer from "./components/Footer"
function App() {

  return (
    <div className="App">
        {/* <StartPopUp /> */}
        <Header />
        <Body />
        <Footer />
    </div>
  );
}

export default App
