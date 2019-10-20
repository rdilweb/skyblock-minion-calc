import React from "react"
import Select from "@material-ui/core/Select"
import { InputLabel } from "@material-ui/core"
import Minions from "../dataclasses/Minions"
import SelectorStyles from "../styles/SelectorStyles"

export default props => {
    const useStyles = SelectorStyles(theme)

    const [minionName, setMinionName] = React.useState("")

    let handleOnChange = e => setMinionName(e.target.value)

    return (
        <form autoComplete="off">
            <InputLabel htmlFor="minionSelectComp">Minion Type</InputLabel>
            <Select onChange={handleOnChange} value={minionName}></Select>
        </form>
    )
}
