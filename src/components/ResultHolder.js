import React from "react"
import ReactMarkdown from "react-markdown"

export default props => {
    let template

    template = `
    ## Result

    It will take *${props.itemCount}* items to make that minion.
    `

    return (
        <div>
            <ReactMarkdown source={template} />
        </div>
    )
}
