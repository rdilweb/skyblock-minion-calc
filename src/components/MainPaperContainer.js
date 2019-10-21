import React from "react"
import Paper from "@material-ui/core/Paper"
import CommonPaperStyle from "../styles/PaperStyle"
import BasicExplanation from "./BasicExplanation"
import TierSelector from "./TierSelector"
import Card from "@material-ui/core/Card"

export default props => {
    return (
        <div className="explanation">
            <Paper style={CommonPaperStyle}>
                <BasicExplanation />
                <br />
                <Card>
                    <br />
                    <TierSelector />
                    <br />
                </Card>
            </Paper>
        </div>
    )
}
