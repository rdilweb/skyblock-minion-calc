import React from "react"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import Minions from "../data/Minions"
import MenuItem from "@material-ui/core/MenuItem"

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
                <MenuItem value={Minions.cobblestone}>
                    {Minions.cobblestone}
                </MenuItem>
                <MenuItem value={Minions.wheat}>{Minions.wheat}</MenuItem>
                <MenuItem value={Minions.carrot}>{Minions.carrot}</MenuItem>
                <MenuItem value={Minions.potato}>{Minions.potato}</MenuItem>
                <MenuItem value={Minions.pumpkin}>{Minions.pumpkin}</MenuItem>
                <MenuItem value={Minions.melon}>{Minions.melon}</MenuItem>
                <MenuItem value={Minions.mushroom}>{Minions.mushroom}</MenuItem>
                <MenuItem value={Minions.cocoa_bean}>
                    {Minions.cocoa_bean}
                </MenuItem>
                <MenuItem value={Minions.cactus}>{Minions.cactus}</MenuItem>
                <MenuItem value={Minions.desertcane}>
                    {Minions.desertcane}
                </MenuItem>
                <MenuItem value={Minions.cow}>{Minions.cow}</MenuItem>
                <MenuItem value={Minions.pig}>{Minions.pig}</MenuItem>
                <MenuItem value={Minions.chicken}>{Minions.chicken}</MenuItem>
                <MenuItem value={Minions.rabbit}>{Minions.rabbit}</MenuItem>
                <MenuItem value={Minions.netherplant}>
                    {Minions.netherplant}
                </MenuItem>
                <MenuItem value={Minions.coal}>{Minions.coal}</MenuItem>
                <MenuItem value={Minions.iron}>{Minions.iron}</MenuItem>
                <MenuItem value={Minions.gold}>{Minions.gold}</MenuItem>
                <MenuItem value={Minions.lapislazuli}>
                    {Minions.lapislazuli}
                </MenuItem>
                <MenuItem value={Minions.diamond}>{Minions.diamond}</MenuItem>
                <MenuItem value={Minions.emerald}>{Minions.emerald}</MenuItem>
                <MenuItem value={Minions.redstone}>{Minions.redstone}</MenuItem>
                <MenuItem value={Minions.netherquartz}>
                    {Minions.netherquartz}
                </MenuItem>
                <MenuItem value={Minions.obsidian}>{Minions.obsidian}</MenuItem>
                <MenuItem value={Minions.glowstone}>
                    {Minions.glowstone}
                </MenuItem>
                <MenuItem value={Minions.gravel}>{Minions.gravel}</MenuItem>
                <MenuItem value={Minions.ice}>{Minions.ice}</MenuItem>
                <MenuItem value={Minions.sand}>{Minions.sand}</MenuItem>
                <MenuItem value={Minions.endstone}>{Minions.endstone}</MenuItem>
                <MenuItem value={Minions.waterclay}>
                    {Minions.waterclay}
                </MenuItem>
                <MenuItem value={Minions.undead}>{Minions.undead}</MenuItem>
                <MenuItem value={Minions.undeadbones}>
                    {Minions.undeadbones}
                </MenuItem>
                <MenuItem value={Minions.spider}>{Minions.spider}</MenuItem>
                <MenuItem value={Minions.poisenedspider}>
                    {Minions.poisonedspider}
                </MenuItem>
                <MenuItem value={Minions.creeper}>{Minions.creeper}</MenuItem>
                <MenuItem value={Minions.enderman}>{Minions.enderman}</MenuItem>
                <MenuItem value={Minions.ghast}>{Minions.ghast}</MenuItem>
                <MenuItem value={Minions.slime}>{Minions.slime}</MenuItem>
                <MenuItem value={Minions.blaze}>{Minions.blaze}</MenuItem>
                <MenuItem value={Minions.netherslime}>
                    {Minions.netherslime}
                </MenuItem>
                <MenuItem value={Minions.fishing}>{Minions.fishing}</MenuItem>
                <MenuItem value={Minions.oak}>{Minions.oak}</MenuItem>
                <MenuItem value={Minions.birch}>{Minions.birch}</MenuItem>
                <MenuItem value={Minions.darkoak}>{Minions.darkoak}</MenuItem>
                <MenuItem value={Minions.savannah}>{Minions.savannah}</MenuItem>
                <MenuItem value={Minions.jungle}>{Minions.jungle}</MenuItem>
            </Select>
        </form>
    )
}
