import React from "react"
import ReactMarkdown from "react-markdown"
import Typography from "@material-ui/core/Typography"

export default props => {
    let template = `## Result\n\nIt will take *${props.itemCount}* items to make that minion.`

    return (
        <div>
            <Typography>
                <ReactMarkdown source={template} />
            </Typography>
        </div>
    )
}
