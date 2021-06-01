import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import CurrentLocation from "./Map";
import AppBar from "../Components/AppBar";
import Box from "@material-ui/core/Box";
import Bottom from "../Components/Bottom";

export class App extends Component {
    constructor() {
        super();
        this.issApiURL = "http://api.open-notify.org/iss-now.json";
        this.gitHubURL = "https://github.com/EagleAngelo/ISSTracker.git";
        this.refreshTimer = 5000;
        this.markerRef = React.createRef();
        this.state = {
            location: {
                lat: NaN,
                lng: NaN,
            },
            markerOpen: false,
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        };
    }

    //---react functions---

    componentDidMount() {
        setInterval(() => this.setAsyncData(this.issApiURL), this.refreshTimer);

        //console.log("DidMount app");
    }

    //---react functions---

    //---custom functions---

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
            markerOpen: true,
        });

        //console.log(this.markerRef.current.props.mapCenter);
        //console.log(this.state.location);
    };

    infoWindowOnClose = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
                markerOpen: false,
            });
        }
    };

    convertUnixTime = (timeStamp) => {
        const date = new Date(timeStamp * 1000);
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();
        const seconds = "0" + date.getSeconds();
        const formattedTime =
            hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
        return formattedTime;
    };

    setAsyncData = async (url) => {
        if (!this.state.markerOpen) {
            const data = await this.fetchCoordinates(url);

            //console.log(data);

            const latitude = parseFloat(data.iss_position.latitude);
            const longitude = parseFloat(data.iss_position.longitude);

            this.setState({
                location: {
                    lat: latitude,
                    lng: longitude,
                },
            });

            //console.log("iss_pos", data.iss_position);
            //console.log("timestamp", this.convertUnixTime(data.timestamp));
            //console.log("state current location", this.state.location);
        }
    };

    fetchCoordinates = async (url) => {
        try {
            const resp = await fetch(url);
            return resp.json();
        } catch (err) {
            console.log("error", err);
        }
    };

    //---custom functions---

    //---render---

    render() {
        //console.log("props render", this.props.google);
        console.log("state render", this.state.location);

        const loc = isNaN(this.state.location.lat)
            ? { lat: 0.0, lng: 0.0 }
            : {
                  lat: this.state.location.lat,
                  lng: this.state.location.lng,
              };

        return (
            <div className="App">
                <AppBar></AppBar>

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="50vh"
                    minWidth="100vw"
                    bgcolor="black"
                >
                    <CurrentLocation
                        centerAroundCurrentLocation
                        google={this.props.google}
                        location={loc}
                        markerOpen={this.state.markerOpen}
                    >
                        <Marker
                            ref={this.markerRef}
                            onClick={this.onMarkerClick}
                            name={"Coordinates: " + Object.entries(loc)}
                        />
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.infoWindowOnClose}
                        >
                            <div>
                                <h4>{this.state.selectedPlace.name}</h4>
                            </div>
                        </InfoWindow>
                    </CurrentLocation>
                </Box>

                <Bottom text="Github" url={this.gitHubURL}></Bottom>
            </div>
        );
    }

    //---render--
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_BOOM_CHACA_LACA,
})(App);
