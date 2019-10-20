import React from "react"
import Paper from "@material-ui/core/Paper"
import CommonPaperStyle from "../styles/PaperStyle"
import BasicExplanation from "./BasicExplanation"
import TierSelector from "./TierSelector"

export default props => {
    return (
        <div className="explanation">
            <Paper style={CommonPaperStyle}>
                <BasicExplanation />
                <br />
                <TierSelector />
            </Paper>
        </div>
    )
}
