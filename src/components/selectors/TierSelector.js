import React from "react"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import Tiers from "../../data/Tiers"
import MenuItem from "@material-ui/core/MenuItem"

const listOfTiers = []
for (const item in Tiers) {
    let v = Tiers[item].toString()
    listOfTiers.push(<MenuItem value={v}>{v}</MenuItem>)
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
