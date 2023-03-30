import React from "react";
import { useState, useEffect } from "react";
import { useHash } from "../hooks/useHash";
import { getDatabase, getElementById } from "../services/api";
import { Map, Pin, Modal, SelectCategory } from "../components";
import { CssBaseline, Container, Grid } from "../materialUI";
import { PaperItem as Item } from "./utilities/PaperItem";

// import data from "../api/db.json";

function App() {
  const [category, setCategory] = useState("");

  const [allLocations, setAllLocations] = useState(null);

  const [clickedCardId, setClickedCardId] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [clickedCardIdInfo, setClickedCardIdInfo] = useState(null);

  // hook for reading hash from the URL
  const [hash, setHash] = useHash();

  // handler for SelectCategory component
  const handleSelectChange = (event) => {
    setCategory(event.target.value);
  };

  // initial loading of all the pins
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getDatabase();
        console.log(response);
        setAllLocations(response);
      } catch (error) {}
    }
    fetchData();
  }, []);

  // hydrating the state using hash (ID number) from the URL string
  useEffect(() => {
    if (hash === "") {
      return;
    }
    const hashEdited = hash.replace(/^./, "");
    setClickedCardId(hashEdited);
    console.log(hashEdited);
    async function fetchById() {
      const data = await getElementById(hashEdited);
      console.log(data);
      setClickedCardIdInfo(data);
      setShowModal(true);
    }
    fetchById();
    // setShowModal(true);
  }, [hash]);

  // filtering locations after category is chosen by user
  const filteredLocationsJsx = allLocations?.filter(
    (location) => location.category === category
  );

  // handling click on a pin
  const onPinClick = (e) => {
    const event = e;

    setClickedCardId(event);
    console.log("hello pin pin ");
    setHash(event);
    onModalOpenToggle();
    const clickedCardIdInfoCalculation = allLocations.find(
      (location) => location.id === event
    );

    setClickedCardIdInfo(clickedCardIdInfoCalculation);
  };

  // toggling modal state
  const onModalOpenToggle = () => {
    console.log(showModal);
    setShowModal((prevState) => !prevState);
  };

  // handling click on backdrop when modal is opened
  const handleBackdropClick = (e) => {
    console.log("click on backdrop");
    if (e.currentTarget === e.target) {
      onModalOpenToggle();
      setHash("");
    }
  };

  // locations array that is sent to the Map component. either default or categorized
  const allLocationsJsx =
    category === ""
      ? allLocations?.map((location) => (
          <Pin
            key={location.id}
            lat={location.lat}
            lng={location.lng}
            clickedCardId={clickedCardId}
          ></Pin>
        ))
      : filteredLocationsJsx?.map((location) => (
          <Pin
            key={location.id}
            lat={location.lat}
            lng={location.lng}
            clickedCardId={clickedCardId}
          ></Pin>
        ));
  return (
    <Container sx={{ mt: 4 }}>
      <CssBaseline />
      {showModal === true && (
        <Modal
          clickedCardIdInfo={clickedCardIdInfo}
          onClose={onModalOpenToggle}
          handleBackdropClick={handleBackdropClick}
        />
      )}
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item>
            <SelectCategory
              handleSelectChange={handleSelectChange}
              category={category}
            />
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item>
            <Map allLocationsJsx={allLocationsJsx} onPinClick={onPinClick} />
          </Item>
        </Grid>
      </Grid>
      {/* <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Modal />} />
      </Routes> */}
    </Container>
  );
}

export default App;
