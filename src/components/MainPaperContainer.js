import React from "react"
import Paper from "@material-ui/core/Paper"
import CommonPaperStyle from "../styles/PaperStyle"
import BasicExplanation from "./BasicExplanation"
import TierSelector from "./TierSelector"
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"
import Input from "@material-ui/icons/Input"
import { makeStyles } from "@material-ui/core/styles"

export default props => {
    const muiStyles = makeStyles(theme => ({
        button: {
            margin: theme.spacing(1)
        }
    }))
    const s = <br />
    const classes = muiStyles()

    return (
        <div className="explanation">
            <Paper style={CommonPaperStyle}>
                <BasicExplanation />
                {s}
                <Card>
                    {s}
                    <TierSelector />
                    {s}
                    <Button
                        startIcon={<Input />}
                        color="primary"
                        variant="contained"
                        className={classes.button}
                    >
                        Submit
                    </Button>
                    {s}
                </Card>
            </Paper>
        </div>
    )
}
