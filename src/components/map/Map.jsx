import React from "react";
import GoogleMapReact from "google-map-react";

export const Map = ({ allLocationsJsx, onPinClick }) => {
  // const [allLocations, setAllLocations] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await getDatabase();
  //       console.log(response);
  //       setAllLocations(response);
  //     } catch (error) {}
  //   }
  //   fetchData();
  // }, []);

  // default location
  const location = {
    lat: 51.049999,
    lng: -114.066666,
  };

  return (
    <div style={{ height: "50vh", width: "100%" }}>
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
