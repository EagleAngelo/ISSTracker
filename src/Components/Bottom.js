import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import MediaCard from "./Card";

const useStyles = makeStyles({
    root: {
        width: "100vw",
        height: "34vh",
        background: "linear-gradient(45deg,#61203f 10%, Black 90%)",
    },
    title: {
        flexGrow: 1,
        color: "white",
    },
});

export default function SimpleBottomNavigation(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                className={classes.root}
            >
                <MediaCard url={props.url}></MediaCard>
            </BottomNavigation>
        </div>
    );
}
