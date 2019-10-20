import React from "react"
import WebFont from "webfontloader"
import NavigationBar from "./components/NavigationBar"
import MainPaperContainer from "./components/MainPaperContainer"

export default props => {
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
            <MainPaperContainer />
        </div>
    )
}
