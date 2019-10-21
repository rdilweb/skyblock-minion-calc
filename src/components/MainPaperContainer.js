import React from "react"
import Paper from "@material-ui/core/Paper"
import CommonPaperStyle from "../styles/PaperStyle"
import BasicExplanation from "./BasicExplanation"
import TierSelector from "./TierSelector"
import MinionSelector from "./MinionSelection"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"
import Input from "@material-ui/icons/Input"
import Delete from "@material-ui/icons/Delete"
import Tooltip from "@material-ui/core/Tooltip"
import { makeStyles } from "@material-ui/core/styles"

export default props => {
    const muiStyles = makeStyles(theme => ({
        button: {
            margin: theme.spacing(1)
        }
    }))
    const s = <br />
    const classes = muiStyles()
    // eslint-disable-next-line
    const [minion, setMinion] = React.useState("")
    // eslint-disable-next-line
    const [tier, setTier] = React.useState("")
    const [results, setResults] = React.useState(<div hidden />)

    let doLogic = pushable => {
        setResults(
            <div>
                {s}
                <Typography variant="body2">
                    Hello! This tool is sadly not done yet. It will work soon
                    though! Do you know code? You can contribute by clicking the
                    menu icon on the navigation bar up top!
                </Typography>
            </div>
        )
    }

    // yeah its kind of backwards, but who cares
    let canSubmit = !(tier !== "" && minion !== "")
    let clearData = pushable => setResults(<div hidden />)

    return (
        <div>
            <Paper style={CommonPaperStyle}>
                <BasicExplanation />
                {s}
                <Card>
                    {s}
                    <TierSelector
                        notifyParentOfChange={change => setMinion(change)}
                    />
                    {s}
                    <MinionSelector
                        notifyParentOfChange={change => setTier(change)}
                    />
                    {s}
                    <Tooltip title="Hide Result">
                        <Button
                            startIcon={<Delete />}
                            color="primary"
                            variant="contained"
                            classname={classes.button}
                            onClick={clearData}
                        >
                            Clear
                        </Button>
                    </Tooltip>
                    <Tooltip title="Calculate Cost...">
                        <Button
                            startIcon={<Input />}
                            color="primary"
                            variant="contained"
                            className={classes.button}
                            onClick={doLogic}
                            disabled={canSubmit}
                        >
                            Submit
                        </Button>
                    </Tooltip>
                    {s}
                    {results}
                    {s}
                </Card>
            </Paper>
        </div>
    )
}
