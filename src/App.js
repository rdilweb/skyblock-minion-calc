import React from "react"
import BasicExplanation from "./components/BasicExplanation"
import WebFont from "webfontloader"
import NavigationBar from "./components/NavigationBar"

function App() {
  WebFont.load({
    google: {
      families: ["Roboto"]
    }
  })
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
      <BasicExplanation />
    </div>
  )
}

export default App
