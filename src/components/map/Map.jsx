import React from "react";
import GoogleMapReact from "google-map-react";
import { useMediaQuery, useTheme } from "@mui/material";

export const Map = ({ allLocationsJsx, onPinClick }) => {
  // default location
  const location = {
    lat: 51.049999,
    lng: -114.066666,
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const height = matches ? "70vh" : "75vh";
  return (
    <div style={{ height: height, width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCrpBVUbDlVyN7LpnOq4N0KSsj0Fv-I42M" }}
        defaultCenter={location}
        center={location}
        defaultZoom={11}
        margin={[50, 50, 50, 50]}
        options={""}
        // onChange={""}
        onChildClick={onPinClick}
      >
        {allLocationsJsx}
      </GoogleMapReact>
    </div>
  );
};
