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

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

export const OutlinedCard = ({ clickedCardIdInfo }) => {
  /////////////////

  /////////////////////
  const imgUrl = [
    {
      id: "0",
      url: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg",
    },
    {
      id: "1",
      url: "https://images.pexels.com/photos/8867472/pexels-photo-8867472.jpeg",
    },
    {
      id: "2",
      url: "https://images.pexels.com/photos/7709187/pexels-photo-7709187.jpeg",
    },
  ];

  // const [imgUrlIndex, setImgUrlIndex] = useState(0);
  // const [slideDirection, setSlideDirection] = useState("left");

  // const handleRightChevronClick = () => {
  //   setSlideDirection("right");
  //   setImgUrlIndex((i) => (i + 1) % imgUrl.length);
  // };
  // const handleLeftChevronClick = () => {
  //   setSlideDirection("left");
  //   setImgUrlIndex(
  //     (i) => (i === 0 ? imgUrl.length - 1 : i - 1) % imgUrl.length
  //   );
  // };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {clickedCardIdInfo.name}
        </Typography>

        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {imgUrl.map((item) => (
              <SwiperSlide>
                <StyledImg src={item.url} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <ChevronLeftIcon
            fontSize={"large"}
            onClick={handleLeftChevronClick}
          />
          {imgUrl.map((img) => (
            <Slide
              key={img.id}
              direction={slideDirection}
              in={imgUrlIndex.toString() === img.id}
              mountOnEnter
              unmountOnExit
            >
              <StyledImg src={img.url} />
            </Slide>
          ))} */}
          {/* <Slide
            direction={slideDirection}
            in={imgUrlIndex.toString() === imgUrl[imgUrlIndex].id}
            mountOnEnter
            unmountOnExit
          >
            <StyledImg src={imgUrl[imgUrlIndex].url} />
          </Slide> */}
          {/* <ChevronRightIcon
            fontSize={"large"}
            onClick={handleRightChevronClick}
          /> */}
        </Box>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
