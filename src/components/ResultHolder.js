/**
 * Copyright 2019-present Reece Dunham
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react"
import ReactMarkdown from "react-markdown"

export default props => {
    let base = `## Result\n\nIt will take ${props.itemCount} raw items to make that minion.\n\n### Enchantments\n\n`
    // divide total cost by calculated price per enchanted item
    let cost = props.itemCount / props.metaArray[0]
    if (props.metaArray[2] && base.isInteger()) {
        base +=
            `In terms of enchanted items, it will cost ${cost}.` +
            (props.metaArray[1]
                ? `\n\n**Warning**: This item has an unusual enchanted item cost, and depending on the item may require more or less of the item to craft the enchanted form!`
                : "")
    } else {
        base += "The specified tier does not require enchanted items."
    }

    return (
        <div>
            <ReactMarkdown source={base} />
        </div>
    )
}
