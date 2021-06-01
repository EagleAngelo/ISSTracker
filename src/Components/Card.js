import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
//import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import ShareIcon from "@material-ui/icons/Share";

import {
    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    LinkedinIcon,
    PinterestIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "1vh",
        width: 400,
        minWidth: 400,
        height: "32vh",
    },
    media: {
        width: "100%",
        height: "8vh",
    },
    icons: {
        display: "inline-block",
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
}));

export default function MediaCard(props) {
    const classes = useStyles();

    const shareUrl = props.url;
    const title = "ISS Tracker";
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://upload.wikimedia.org/wikipedia/commons/0/04/International_Space_Station_after_undocking_of_STS-132.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        ISS
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        The International Space Station travels at 7.66 km/s,
                        orbiting Earth about every 90 minutes.
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions disableSpacing>
                <Button
                    size="small"
                    color="primary"
                    href="https://www.nasa.gov/feature/facts-and-figures/"
                >
                    Learn More
                </Button>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ShareIcon />
                </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <div>
                        <div className={classes.icons}>
                            <FacebookShareButton url={shareUrl} quote={title}>
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>
                        </div>

                        <div className={classes.icons}>
                            <FacebookMessengerShareButton
                                url={shareUrl}
                                quote={title}
                            >
                                <FacebookMessengerIcon size={32} round />
                            </FacebookMessengerShareButton>
                        </div>

                        <div className={classes.icons}>
                            <TwitterShareButton url={shareUrl} title={title}>
                                <TwitterIcon size={32} round />
                            </TwitterShareButton>
                        </div>

                        <div className={classes.icons}>
                            <TelegramShareButton url={shareUrl} title={title}>
                                <TelegramIcon size={32} round />
                            </TelegramShareButton>
                        </div>

                        <div className={classes.icons}>
                            <WhatsappShareButton
                                url={shareUrl}
                                title={title}
                                separator=":: "
                            >
                                <WhatsappIcon size={32} round />
                            </WhatsappShareButton>
                        </div>

                        <div className={classes.icons}>
                            <LinkedinShareButton url={shareUrl}>
                                <LinkedinIcon size={32} round />
                            </LinkedinShareButton>
                        </div>

                        <div className={classes.icons}>
                            <PinterestShareButton url={String(window.location)}>
                                <PinterestIcon size={32} round />
                            </PinterestShareButton>
                        </div>

                        <div className={classes.icons}>
                            <RedditShareButton
                                url={shareUrl}
                                title={title}
                                windowWidth={660}
                                windowHeight={460}
                            >
                                <RedditIcon size={32} round />
                            </RedditShareButton>
                        </div>

                        <div className={classes.icons}>
                            <TumblrShareButton url={shareUrl} title={title}>
                                <TumblrIcon size={32} round />
                            </TumblrShareButton>
                        </div>

                        <div className={classes.icons}>
                            {" "}
                            <EmailShareButton
                                url={shareUrl}
                                subject={title}
                                body="body"
                            >
                                <EmailIcon size={32} round />
                            </EmailShareButton>
                        </div>
                    </div>
                </CardContent>
            </Collapse>
        </Card>
    );
}
