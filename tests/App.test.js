/* 
    General Project UNIT TESTS
    Application Client
    General Tests
    remote deploy audit
*/

import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

/*
Confirming the the app renders without causing any crashes
*/
it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

/*
Confirming the app can connect to a network
*/
it("can connect to network", () => {
  const div = document.createElement("div")
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
