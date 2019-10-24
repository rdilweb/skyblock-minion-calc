import React from "react"
import Typography from "@material-ui/core/Typography"
import Error from "@material-ui/icons/ErrorOutline"
import BugReport from "@material-ui/icons/BugReportOutlined"
import TrendingFlat from "@material-ui/icons/TrendingFlatOutlined"
import Button from "@material-ui/core/Button"
import { github } from "./NavigationBar"

export default props => {
    return (
        <div>
            <Typography variant="h5">
                <Error /> Oh no <Error />
            </Typography>
            <Typography variant="body1">
                <i>It looks like something went wrong.</i>
                <br />
                Error message: {props.message}.
                <br />
                If you want, you can
            </Typography>
            <a
                href={github + "/issues"}
                style={{
                    textDecoration: "inherit"
                }}
            >
                <Button
                    variant="contained"
                    startIcon={<BugReport />}
                    endIcon={<TrendingFlat />}
                    color="secondary"
                >
                    File Bug Report
                </Button>
            </a>
        </div>
    )
}
