/**
 * Copyright 2019-present Reece Dunham
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import "@testing-library/jest-dom/extend-expect"
import React from "react"
import ReactDOM from "react-dom"
import { render, cleanup } from "@testing-library/react"
import App from "./App"

beforeAll(() => {
    console.error = (...args) => {
        if (/Warning.*should have a unique "key" prop/.test(args[0])) {
            return
        }
        originalError.call(console, ...args)
    }
})
afterEach(() => cleanup())

describe("general DOM tests", () => {
    it("renders App component without crashing", () => {
        const div = document.createElement("div")
        ReactDOM.render(<App />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
    it("should not display results right after render", () => {
        const { queryByText } = render(<App />)
        expect(queryByText("Result")).toBeNull()
    })
})
