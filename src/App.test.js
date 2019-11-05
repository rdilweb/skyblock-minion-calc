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
import RomanNumeral from "js-roman-numerals"

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

describe("storage tests", () => {
    it("can build a storage object with dummy values", () => {
        // build object
        const o = require("./data/Store").buildProgressionData(
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11
        )
        expect(Object.keys(o)).not.toBeNull()
    })
})

describe("roman numerals library tests", () => {
    it("can convert numbers to their proper roman numeral strings", () => {
        const first = new RomanNumeral(4).toString()
        const second = new RomanNumeral(11).toString()
        const third = new RomanNumeral(8).toString()
        const forth = new RomanNumeral(2).toString()
        expect(first).toBe("IV")
        expect(second).toBe("XI")
        expect(third).toBe("VIII")
        expect(forth).toBe("II")
    })
    it("can convert roman numerals to there proper number forms", () => {
        const first = new RomanNumeral("V").toInt()
        const second = new RomanNumeral("VII").toInt()
        const third = new RomanNumeral("III").toInt()
        const forth = new RomanNumeral("I").toInt()
        expect(first).toBe(5)
        expect(second).toBe(7)
        expect(third).toBe(3)
        expect(forth).toBe(1)
    })
})
