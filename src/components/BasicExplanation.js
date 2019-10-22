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
