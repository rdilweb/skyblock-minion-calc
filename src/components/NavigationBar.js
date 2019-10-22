import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

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
                    <a
                        href="https://github.com/RDIL/skyblock-minion-calc"
                        target="_blank"
                        style={{
                            color: "inherit"
                        }}
                        rel="noopener noreferrer"
                        title="Source Code"
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    </a>
                    <Typography variant="h6" className={classes.title}>
                        Skyblock Minion Cost Calculator
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
