import React from "react"
import Paper from "@material-ui/core/Paper"
import CommonPaperStyle from "../styles/PaperStyle"
import BasicExplanation from "./BasicExplanation"
import TierSelector from "./selectors/TierSelector"
import MinionSelector from "./selectors/MinionSelection"
import ResultHolder from "./ResultHolder"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"
import Input from "@material-ui/icons/Input"
import Delete from "@material-ui/icons/Delete"
import Tooltip from "@material-ui/core/Tooltip"
import { makeStyles } from "@material-ui/core/styles"
import LogicHandler from "../data/LogicHandler"

export default props => {
    const classes = makeStyles(theme => ({
        button: {
            margin: theme.spacing(1)
        }
    }))()

    const s = <br />

    const [minion, setMinion] = React.useState("")
    const [tier, setTier] = React.useState("")
    const [results, setResults] = React.useState(<div hidden />)

    let doLogic = pushable => {
        let returnedLogic = LogicHandler(tier, minion)
        // deep checking (===) breaks the if, so shut eslint up
        // eslint-disable-next-line
        if (!returnedLogic == "") {
            setResults(
                <div>
                    {s}
                    <ResultHolder itemCount={returnedLogic} />
                </div>
            )
        } else {
            setResults(
                <div>
                    {s}
                    <Typography variant="body2">
                        Hello! This tool is sadly not done yet. It will work
                        soon though! Do you know code? You can contribute by
                        clicking the menu icon on the navigation bar up top!
                    </Typography>
                </div>
            )
        }
    }

    let canSubmit = tier !== "" && minion !== ""
    let clearData = pushable => setResults(<div hidden />)
    let submitTooltip = canSubmit
        ? "Calculate cost..."
        : "Fill out all fields first!"

    return (
        <div>
            <Paper style={CommonPaperStyle}>
                <BasicExplanation />
                {s}
                <Card>
                    {s}
                    <TierSelector
                        notifyParentOfChange={change => setTier(change)}
                    />
                    {s}
                    <MinionSelector
                        notifyParentOfChange={change => setMinion(change)}
                    />
                    {s}
                    <Tooltip title="Hide result">
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
                    <Tooltip title={submitTooltip}>
                        <span>
                            <Button
                                startIcon={<Input />}
                                color="primary"
                                variant="contained"
                                className={classes.button}
                                onClick={doLogic}
                                disabled={!canSubmit}
                            >
                                Submit
                            </Button>
                        </span>
                    </Tooltip>
                    {s}
                    {results}
                    {s}
                </Card>
            </Paper>
        </div>
    )
}
