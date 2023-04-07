import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Slide } from "@mui/material";
import { StyledImg } from "./Card.styled";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const OutlinedCard = ({ clickedCardIdInfo }) => {
  const imgUrl = [
    {
      id: "1",
      url: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg",
    },
    {
      id: "12",
      url: "https://images.pexels.com/photos/8867472/pexels-photo-8867472.jpeg",
    },
    {
      id: "123",
      url: "https://images.pexels.com/photos/7709187/pexels-photo-7709187.jpeg",
    },
  ];

  const [imgUrlIndex, setImgUrlIndex] = useState(0);
  console.log(imgUrlIndex);
  const [slideDirection, setSlideDirection] = useState("left");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlideExited = () => {
    setIsAnimating(false);
  };

  const handleRightChevronClick = () => {
    setSlideDirection("right");
    setImgUrlIndex((i) => (i + 1) % imgUrl.length);
  };
  const handleLeftChevronClick = () => {
    setSlideDirection("left");
    setImgUrlIndex(
      (i) => (i === 0 ? imgUrl.length - 1 : i - 1) % imgUrl.length
    );
  };
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {clickedCardIdInfo.name}
        </Typography>

        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <ChevronLeftIcon
            fontSize={"large"}
            onClick={handleLeftChevronClick}
          />
          <Slide
            direction={slideDirection}
            in={imgUrlIndex === 0}
            mountOnEnter
            unmountOnExit
          >
            <StyledImg src={imgUrl[0].url} />
          </Slide>
          <Slide
            direction={slideDirection}
            in={imgUrlIndex === 1}
            mountOnEnter
            unmountOnExit
          >
            <StyledImg src={imgUrl[1].url} />
          </Slide>
          <Slide
            direction={slideDirection}
            in={imgUrlIndex === 2}
            mountOnEnter
            unmountOnExit
          >
            <StyledImg src={imgUrl[2].url} />
          </Slide>
          <ChevronRightIcon
            fontSize={"large"}
            onClick={handleRightChevronClick}
          />
        </Box>
      </CardContent>
    </React.Fragment>
  );

  // function ImageSlider({ images }) {
  //   const [currentIndex, setCurrentIndex] = useState(0);

  //   const nextIndex = (currentIndex + 1) % images.length;

  //   return (
  //     <div>
  //       <Slide
  //         direction="left"
  //         in={currentIndex === 0}
  //         mountOnEnter
  //         unmountOnExit
  //       >
  //         <img src={images[0]} alt="First slide" />
  //       </Slide>
  //       <Slide
  //         direction="left"
  //         in={currentIndex === 1}
  //         mountOnEnter
  //         unmountOnExit
  //       >
  //         <img src={images[1]} alt="Second slide" />
  //       </Slide>
  //       <Slide
  //         direction="left"
  //         in={currentIndex === 2}
  //         mountOnEnter
  //         unmountOnExit
  //       >
  //         <img src={images[2]} alt="Third slide" />
  //       </Slide>
  //       <button onClick={() => setCurrentIndex(nextIndex)}>Next slide</button>
  //     </div>
  //   );
  // }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
