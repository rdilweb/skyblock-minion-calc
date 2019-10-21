import React from "react"
import Typography from "@material-ui/core/Typography"

export default props => {
    return (
        <div>
            <Typography variant="h5">What is this?</Typography>
            <Typography variant="body1">
                This is a simple calculator that tells you how much it will cost
                (in items) to upgrade a minion to a selected tier.
            </Typography>
        </div>
    )
}
