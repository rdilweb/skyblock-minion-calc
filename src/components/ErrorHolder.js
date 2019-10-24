import React from "react"
import Typography from "@material-ui/core/Typography"
import Error from "@material-ui/icons/ErrorOutline"

export default props => {
    return (
        <div>
            <Typography variant="h5">
                <Error /> Oh no <Error />
            </Typography>
            <Typography variant="body1">
                It looks like something went wrong. Error message: {props.message}.
            </Typography>
        </div>
    )
}