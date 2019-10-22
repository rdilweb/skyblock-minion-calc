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
