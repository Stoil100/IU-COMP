import React from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import gamingPicture1 from "../Assets/gamingSwiperPictures/gaming1.jpg";
import gamingPicture2 from "../Assets/gamingSwiperPictures/gaming2.jpg";
import gamingPicture3 from "../Assets/gamingSwiperPictures/gaming3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import GlossContainer from "../Components/GlossContainer";

const gamingSwiperPictures = [gamingPicture1, gamingPicture2, gamingPicture3];
const newsSwiperText = [
  {
    image: "",
    title: "Начало на състезанието",
    description: " Началото ще бъде със закъснение от 10 мин.Ще започнем в 10:10. Съжаляваме за неудобството",
  },
  {
    image: "",
    title: "Обяд",
    description: " Времетраенето на обяда ще бъде удължено ;). Добър Апетит!",
  },
  {
    image: "",
    title: "Нов Турнир",
    description: "Ще бъде добавен нов турнир изненада!",
  },
  {
    image: "",
    title: "Награждаване",
    description: " Награждаването ще се състои на 15.11.2023 в 12:00 в залата.",
  },
];

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled(Typography)``;
const ImageSwiper = styled(Swiper)`
  width: 100vw;
  max-width: 100%;
`;
const ImageSlider = styled(SwiperSlide)`
  width: 100vw;
  max-width: 100%;
`;
const NewsSwiper = styled(Swiper)`
  width: 100vw;
  max-width: 100%;
  height: 30vh;
`;

const NewsSlider = styled(SwiperSlide)`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const NewsTextBox = styled(Box)``;
const Image = styled.img`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
`;
const AnimationBox = styled(Box)``;

export const HomePage = () => {
  const swiperParams = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    modules: [Pagination, Autoplay, Navigation],
  };
  return (
    <Container>
      <Title></Title>
      <ImageSwiper {...swiperParams}>
        {gamingSwiperPictures.map((picture) => (
          <ImageSlider>
            <Image src={picture} />
          </ImageSlider>
        ))}
      </ImageSwiper>

      <NewsSwiper {...swiperParams}>
        <Title>Новини</Title>
     
        {newsSwiperText.map((item) =>(
                <NewsSlider style={{backgroundImage:`url(${item.image})`}}>
                <GlossContainer>
                  <Typography variant="h2">{item.title}</Typography>
                  <Typography>
                    {item.description}
                  </Typography>
                </GlossContainer>
              </NewsSlider>
            ))}
      </NewsSwiper>
      <AnimationBox />
    </Container>
  );
};
