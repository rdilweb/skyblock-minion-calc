import React from "react"
import "./App.css"
import BasicExplanation from "./components/BasicExplanation"
import WebFont from "webfontloader"

function App() {
  WebFont.load({
    google: {
      families: ["Roboto"]
    }
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>Skyblock Minion Cost Calculator</h1>
        <BasicExplanation />
      </header>
    </div>
  )
}

export default App
