import React from "react"
import Typography from "@material-ui/core/Typography"
import Error from "@material-ui/icons/ErrorOutline"
import BugReport from "@material-ui/icons/BugReportOutlined"
import Forward from "@material-ui/icons/Forward"
import Button from "@material-ui/core/Button"
import { github } from "../../data/Common"

export default props => {
    let u = props.showReportButton ? "If you want, you can" : null
    let b = props.showReportButton ? (
        <a
            href={github + "/issues"}
            style={{
                textDecoration: "inherit"
            }}
        >
            <Button
                variant="contained"
                startIcon={<BugReport />}
                endIcon={<Forward />}
                color="secondary"
            >
                File a Bug Report
            </Button>
        </a>
    ) : null

    return (
        <div>
            <Typography variant="h5">
                <Error /> Oh no <Error />
            </Typography>
            <Typography variant="body1">
                <i>It looks like something went wrong.</i>
                <br />
                <br />
                Error message: <code>{props.message}</code>.
                <br />
                {u}
            </Typography>
            {b}
        </div>
    )
}
