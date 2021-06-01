import React, { Component } from "react";

const mapStyles = {
    map: {
        width: "80vw",
        height: "60vh",
    },
};

export class CurrentLocation extends Component {
    constructor(props) {
        super(props);

        this.mapRef = React.createRef();

        this.state = {
            location: {
                lat: this.props.location.lat,
                lng: this.props.location.lng,
            },
        };
    }

    //---react functions---

    componentDidUpdate(prevProps, prevState) {
        /* console.log("---");
        console.log("Update General props loc", this.props.location);
        console.log("Update General prev prop loc", prevProps.location);
        console.log("Update GEneral state loc", this.state.location);
        console.log("Update General prev state loc", prevState.location);
        console.log("Update General props google", this.props.google);
        console.log("---"); */

        if (
            prevProps.location !== this.props.location &&
            !this.props.markerOpen
        ) {
            this.setState({
                location: this.props.location,
            });

            this.loadMap();
        }

        if (prevState.location !== this.state.location) {
            this.recenterMap();
        }
    }

    componentDidMount() {
        if (this.props.location) {
            this.setState({
                location: {
                    lat: this.props.location.lat,
                    lng: this.props.location.lng,
                },
            });
        }

        //console.log("DidMount Map");

        this.loadMap();
    }

    //---react functions---

    //---custom functions---

    recenterMap = () => {
        const map = this.map;
        const current = this.state.location;
        const google = this.props.google;
        const maps = google.maps;

        if (map) {
            let center = new maps.LatLng(current.lat, current.lng);
            map.setCenter(center);
            map.panTo(center);

            //console.log("Recenter", current);
            //console.log("Recenter", map);
        }
    };

    loadMap = () => {
        if (this.props && this.props.google) {
            const { google } = this.props;
            const maps = google.maps;

            // reference to the actual DOM element, fixed to not use deprecated ref

            const node = this.mapRef.current;
            let { zoom } = this.props;
            const { lat, lng } = this.state.location;
            const center = new maps.LatLng(lat, lng);

            const mapConfig = Object.assign(
                {},
                {
                    center: center,
                    zoom: zoom,
                    streetViewControl: false,
                    disableDefaultUI: true,
                }
            );

            //console.log(this.props, this.props.google);

            this.map = new maps.Map(node, mapConfig);

            console.log("Load Map");
        }
    };

    renderChildren = () => {
        const { children } = this.props;

        if (!children) return;

        return React.Children.map(children, (c) => {
            if (!c) return;

            return React.cloneElement(c, {
                map: this.map,
                google: this.props.google,
                mapCenter: this.state.location,
            });
        });
    };

    //---custom functions---

    //---render---

    render() {
        const style = Object.assign({}, mapStyles.map);

        return (
            <div>
                <div style={style} ref={this.mapRef}>
                    Loading map...
                </div>
                {this.renderChildren()}
            </div>
        );
    }

    //---render---
}

CurrentLocation.defaultProps = {
    zoom: 4,
    initialCenter: {
        lat: 0.0,
        lng: 0.0,
    },
    centerAroundCurrentLocation: true,
    visible: true,
};

export default CurrentLocation;
