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

import React from "react"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import Tiers from "../../data/Tiers"
import MenuItem from "@material-ui/core/MenuItem"
import RomanNumeral from "js-roman-numerals"

let listOfTiers = []
for (const item in Tiers) {
    let v = Tiers[item].toString()
    listOfTiers.push(
        <MenuItem value={v}>
            {v} ({new RomanNumeral(v).toInt()})
        </MenuItem>
    )
}

export default props => {
    const [tier, setTier] = React.useState("")

    let handleOnChange = e => {
        setTier(e.target.value)
        props.notifyParentOfChange(e.target.value)
    }

    return (
        <form autoComplete="off">
            <InputLabel>Tier</InputLabel>
            <Select onChange={handleOnChange} value={tier}>
                {listOfTiers}
            </Select>
        </form>
    )
}
