import React from "react"
import Select from "@material-ui/core/Select"
import { InputLabel } from "@material-ui/core"
import Minions from "../dataclasses/Minions"
import { makeStyles } from "@material-ui/core/styles"

export default props => {
  const useStyles = makeStyles(theme => ({
    button: {
      display: "block",
      marginTop: theme.spacing(2)
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    }
  }))

  const [minionName, setMinionName] = React.useState("")

  let handleOnChange = e => setMinionName(e.target.value)

  return (
    <form autoComplete="off">
      <InputLabel htmlFor="minionSelectComp">Minion Type</InputLabel>
      <Select onChange={handleOnChange} value={minionName}></Select>
    </form>
  )
}
