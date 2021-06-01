import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "0vh",
        flexGrow: 1,
        background: "linear-gradient(45deg, Black 10%, #61203f 90%)",
        height: "6vh",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        marginTop: "-1vh",
    },
    title: {
        flexGrow: 1,
        color: "white",
        backgroundColor: "black",
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" className={classes.title}>
                        A simple ISS real time tracker
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
