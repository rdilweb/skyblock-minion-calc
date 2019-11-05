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
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { github } from "../data/Common"

export default props => {
    const classes = makeStyles(theme => ({
        title: {
            flexGrow: 0.95
        }
    }))()

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Tooltip title="View Source Code">
                        <a
                            href={github}
                            target="_blank"
                            style={{
                                color: "inherit"
                            }}
                            rel="noopener noreferrer"
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                        </a>
                    </Tooltip>
                    <Typography variant="h6" className={classes.title}>
                        Skyblock Minion Cost Calculator
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
