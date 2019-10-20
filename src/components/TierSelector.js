import React from "react"
import Select from "@material-ui/core/Select"
import { InputLabel } from "@material-ui/core"
import Tiers from "../dataclasses/Tiers"
import MenuItem from "@material-ui/core/MenuItem"
import SelectorStyles from "../styles/SelectorStyles"

export default props => {
    const useStyles = SelectorStyles(theme)

    const [tier, setTier] = React.useState("")

    let handleOnChange = e => setTier(e.target.value)

    return (
        <form autoComplete="off">
            <InputLabel htmlFor="tierSelectComp">Tier</InputLabel>
            <Select
                onChange={handleOnChange}
                value={tier}
                style={this.useStyles}
            >
                <MenuItem value={Tiers.one}>{Tiers.one}</MenuItem>
                <MenuItem value={Tiers.two}>{Tiers.two}</MenuItem>
                <MenuItem value={Tiers.three}>{Tiers.three}</MenuItem>
                <MenuItem value={Tiers.four}>{Tiers.four}</MenuItem>
                <MenuItem value={Tiers.five}>{Tiers.five}</MenuItem>
                <MenuItem value={Tiers.six}>{Tiers.six}</MenuItem>
                <MenuItem value={Tiers.seven}>{Tiers.seven}</MenuItem>
                <MenuItem value={Tiers.eight}>{Tiers.eight}</MenuItem>
                <MenuItem value={Tiers.nine}>{Tiers.nine}</MenuItem>
                <MenuItem value={Tiers.ten}>{Tiers.ten}</MenuItem>
                <MenuItem value={Tiers.eleven}>{Tiers.eleven}</MenuItem>
                <MenuItem value={Tiers.twelve}>{Tiers.twelve}</MenuItem>
            </Select>
        </form>
    )
}
