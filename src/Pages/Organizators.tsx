import React from "react";
import person1Image from "../Assets/Organizators/person1.jpg";
import person2Image from "../Assets/Organizators/person2.jpg";
import person3Image from "../Assets/Organizators/person3.jpg";
import person4Image from "../Assets/Organizators/person4.jpg";
import person5Image from "../Assets/Organizators/person5.jpg";
import person6Image from "../Assets/Organizators/person6.jpg";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/autoplay";
import GlossContainer from "../Components/GlossContainer";

const people = [
  { image: person1Image, name: "Добри Петков" },
  { image: person2Image, name: "Петя Иванова" },
  { image: person3Image, name: "Ивайло Христов" },
  { image: person4Image, name: "Станислав Момчев" },
  { image: person5Image, name: "Петър Ивайлов" },
  { image: person6Image, name: "Мария Пенчева" },
];

const Container = styled(Box)`
display:flex;
justify-content: center;
align-items: center;
flex-direction:column;
height: 100vh;
background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);

`;
const ImageSwiper = styled(Swiper)`
width: 40vw;
height: 90vh;

display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-items: center;
justify-content: center;
`;
const ImageBox = styled(SwiperSlide)`
background-size:cover;
background-repeat:no-repeat;
display:flex;
justify-content: center;
align-items: end;
border-radius:10px;
`;

const swiperParams = {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  modules: [Pagination, Autoplay],
  pagination:{
    dynamicBullets: true,
    clickable: true,
  }
};

export const OrganizatorsPage = () => {
  return (
    <Container>
        <Typography variant="h2">Организатори на събитието</Typography>
      <ImageSwiper {...swiperParams}>
        {people.map((item) => (
          <ImageBox style={{backgroundImage:`url(${item.image})`}}>
            <GlossContainer>
            <Typography  variant="h3" color={"#fff"}>{item.name}</Typography>
            </GlossContainer>
                
          </ImageBox>
        ))}
      </ImageSwiper>
    </Container>
  );
};
