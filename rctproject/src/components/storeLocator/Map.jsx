import React, { Component } from "react";
import MapGL, { NavigationControl, Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const navStyle = {
  position: "absolute",
  top: 10,
  left: 0,
  padding: 10,
};

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        zoom: 15,
        bearing: 0,
        pitch: 0,
        width: "100%",
        height: 500,
      },
    };
  }

  render() {
    let { viewport } = this.state;
    const { lat, long } = this.props.coordinates;
    viewport = { ...viewport, latitude: lat, longitude: long };

    const marker = {
      lat: lat,
      long: long,
      name: "ABC Hospitals",
      info: 10,
    };
    return (
      <MapGL
        {...viewport}
        onViewportChange={(viewport) => {
          this.setState({ viewport });
        }}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        mapboxApiAccessToken="pk.eyJ1IjoiYWhtZWRyemFraGFuIiwiYSI6ImNraDdqOXUxZDA0d2YydnFxdWVoZWppem4ifQ.S7E4NJi7vW08L29Sr4tJQQ"
      >
        <div className="nav" style={navStyle}>
          <NavigationControl
            onViewportChange={(viewport) => {
              this.setState({ viewport });
            }}
          />
          <div>
            <Marker longitude={marker.long} latitude={marker.lat}>
              <LocationOnIcon fontSize="large" style={{ color: "red" }} />
            </Marker>
          </div>
        </div>
      </MapGL>
    );
  }
}

export default Map;
