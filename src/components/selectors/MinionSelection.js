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
import Minions from "../../data/Minions"
import MenuItem from "@material-ui/core/MenuItem"

let listOfMinions = []
for (const item in Minions) {
    let v = Minions[item].toString()
    listOfMinions.push(<MenuItem value={v}>{v}</MenuItem>)
}

export default props => {
    const [minionName, setMinionName] = React.useState("")

    let handleOnChange = e => {
        setMinionName(e.target.value)
        props.notifyParentOfChange(e.target.value)
    }

    return (
        <form autoComplete="off">
            <InputLabel>Minion Type</InputLabel>
            <Select onChange={handleOnChange} value={minionName}>
                {listOfMinions}
            </Select>
        </form>
    )
}
