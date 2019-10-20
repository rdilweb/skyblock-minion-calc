import React from "react"
import Paper from "@material-ui/core/Paper"
import CommonPaperStyle from "../styles/PaperStyle"
import BasicExplanation from "./BasicExplanation"

export default props => {
    return (
        <div className="explanation" style={{ alignItems: "center" }}>
            <Paper style={CommonPaperStyle} justify="center">
                <BasicExplanation />
            </Paper>
        </div>
    )
}
