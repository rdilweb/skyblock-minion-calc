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
import Paper from "@material-ui/core/Paper"
import BasicExplanation from "./BasicExplanation"
import TierSelector from "./selectors/TierSelector"
import MinionSelector from "./selectors/MinionSelection"
import ResultHolder from "./ResultHolder"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"
import Input from "@material-ui/icons/Input"
import Delete from "@material-ui/icons/Delete"
import Tooltip from "@material-ui/core/Tooltip"
import { makeStyles } from "@material-ui/core/styles"
import LogicHandler, { enchantedItemCost } from "../data/LogicHandler"

export default props => {
    const classes = makeStyles(theme => ({
        button: {
            margin: theme.spacing(1)
        }
    }))()

    const s = <br />

    const [minion, setMinion] = React.useState("")
    const [tier, setTier] = React.useState("")
    const [results, setResults] = React.useState(<div hidden />)

    let doLogic = e => {
        const total = LogicHandler(tier, minion)
        // todo: remove the entire statement after adding all data
        // eslint-disable-next-line
        if (!total == "") {
            setResults(
                <div>
                    {s}
                    <ResultHolder
                        itemCount={total}
                        metaArray={enchantedItemCost(tier, minion, total)}
                    />
                </div>
            )
        } else {
            setResults(
                <div>
                    {s}
                    <Typography variant="body2">
                        Hello! Sadly, the data for that minion isn't in our
                        storage. Not to worry though! It will be by the end of
                        the week!
                    </Typography>
                </div>
            )
        }
    }

    let canSubmit = tier !== "" && minion !== ""
    let clearData = e => setResults(<div hidden />)
    let submitTooltip = canSubmit
        ? "Calculate cost..."
        : "Fill out all fields first!"

    return (
        <div>
            <Paper
                style={{
                    padding: "40px",
                    margin: "15px"
                }}
            >
                <BasicExplanation />
                {s}
                <Card>
                    {s}
                    <TierSelector
                        notifyParentOfChange={change => setTier(change)}
                    />
                    {s}
                    <MinionSelector
                        notifyParentOfChange={change => setMinion(change)}
                    />
                    {s}
                    <Tooltip title="Hide result">
                        <Button
                            startIcon={<Delete />}
                            color="primary"
                            variant="contained"
                            className={classes.button}
                            onClick={clearData}
                        >
                            Clear
                        </Button>
                    </Tooltip>
                    <Tooltip title={submitTooltip}>
                        <span>
                            <Button
                                startIcon={<Input />}
                                color="primary"
                                variant="contained"
                                className={classes.button}
                                onClick={doLogic}
                                disabled={!canSubmit}
                            >
                                Submit
                            </Button>
                        </span>
                    </Tooltip>
                    {s}
                    {results}
                    {s}
                </Card>
            </Paper>
        </div>
    )
}
