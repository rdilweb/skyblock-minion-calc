import React from "react"
import Typography from "@material-ui/core/Typography"

export default props => {
    return (
        <div>
            <Typography variant="subtitle1">Result</Typography>
            <Typography variant="body2">
                It will take {props.itemCount} items to make the specified
                minion!
            </Typography>
        </div>
    )
}
