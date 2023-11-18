import React from 'react'
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import prizesBg from "../Assets/websiteBackgrounds/prizeBackground.jpg";
import prize1 from "../Assets/prizes/candy.jpg";
import prize2 from "../Assets/prizes/tablet.jpg";
import prize3 from "../Assets/prizes/controller.jpg";
import GlossContainer from '../Components/GlossContainer';

const prizes=[{image:prize3,title:"За първо място таблет"},{image:prize2,title:"За второ място контролер за ps4"},{image:prize1,title:"За треро място са предвидени вкусни лакомства"}]

const Container=styled(Box)`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;

@media (max-width: 900px)
flex-direction: column;
`;
const Image=styled.img`
height:300px;
width:400px;
`;

export const PrizesPage = () => {
  return (
   <Container>
    {prizes.map((prize) =>(
        <GlossContainer>
            <Image src={prize.image}/>
            <Typography>{prize.title}</Typography>
        </GlossContainer>
    ))}
   </Container>
  )
}
