import React from "react";
import ProfileCircle from "../Components/ProfileCircle";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import background from "../Assets/websiteBackgrounds/profileBackground.jpeg";
import Reveal from "../Functions/Reveal";
import GlossContainer from "../Components/GlossContainer";
const Container = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  //flex-direction: column;
  min-height: 100vh;
  padding: 10px;
  background-image: url(${background});
  background-size: cover;
`;
const LeftContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width:20%;
`;
const CenterContainer =styled(Box)`
 overflow: hidden;
 padding:10px;
`;
const RightContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
 width:20%;
`;

export default function ProfilePage() {
  return (
    <Container>
      
        <LeftContainer>
        <Reveal direction="left" delay={0.5}>
          <GlossContainer>
            <Typography
              variant="h3"
              sx={{ color: "#fff", fontFamily: "Comfortaa"}}
            >
             Стоил Стоилов
            </Typography>
          </GlossContainer>
          <GlossContainer>
            <Typography
              variant="h4"
              sx={{ color: "#fff", fontFamily: "Comfortaa" }}
            >
             Здравейте! 👋 <br/>
             Аз съм Стоил Стоилов, на 17 години, от град Варна.
            </Typography>
          </GlossContainer>
          </Reveal>
        </LeftContainer>
    <CenterContainer>
      <ProfileCircle />
      </CenterContainer>
      <RightContainer>
      <Reveal direction="right"  delay={0.5}>
        <GlossContainer>
          <Typography
            variant="h4"
            sx={{ color: "#fff", fontFamily: "Comfortaa" }}
          >
           Ученик в 11 клас в ПГКМКС "акад. Благовест Сендов" град Варна
          </Typography>
        </GlossContainer>
        </Reveal>
      </RightContainer>
     
    </Container>
  );
}
