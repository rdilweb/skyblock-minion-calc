import React from "react"
import Select from "@material-ui/core/Select"
import { InputLabel } from "@material-ui/core"
import Tiers from "../../data/Tiers"
import MenuItem from "@material-ui/core/MenuItem"

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
                <MenuItem value={Tiers.one.toString()}>
                    {Tiers.one.toString()}
                </MenuItem>
                <MenuItem value={Tiers.two.toString()}>
                    {Tiers.two.toString()}
                </MenuItem>
                <MenuItem value={Tiers.three.toString()}>
                    {Tiers.three.toString()}
                </MenuItem>
                <MenuItem value={Tiers.four.toString()}>
                    {Tiers.four.toString()}
                </MenuItem>
                <MenuItem value={Tiers.five.toString()}>
                    {Tiers.five.toString()}
                </MenuItem>
                <MenuItem value={Tiers.six.toString()}>
                    {Tiers.six.toString()}
                </MenuItem>
                <MenuItem value={Tiers.seven.toString()}>
                    {Tiers.seven.toString()}
                </MenuItem>
                <MenuItem value={Tiers.eight.toString()}>
                    {Tiers.eight.toString()}
                </MenuItem>
                <MenuItem value={Tiers.nine.toString()}>
                    {Tiers.nine.toString()}
                </MenuItem>
                <MenuItem value={Tiers.ten.toString()}>
                    {Tiers.ten.toString()}
                </MenuItem>
                <MenuItem value={Tiers.eleven.toString()}>
                    {Tiers.eleven.toString()}
                </MenuItem>
                <MenuItem value={Tiers.twelve.toString()}>
                    {Tiers.twelve.toString()}
                </MenuItem>
            </Select>
        </form>
    )
}
