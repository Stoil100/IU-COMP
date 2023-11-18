import React from 'react'
import styled from '@emotion/styled'
import { Typography,Box } from '@mui/material';
import {Instagram,Facebook} from '@mui/icons-material'
import devinLogo from "../Assets/footerLogos/devinLogo.png"
import varnaLogo from "../Assets/footerLogos/varnaLogo.png"
import sonyLogo from "../Assets/footerLogos/sonyLogo.png"

const logos=[
  devinLogo,varnaLogo,sonyLogo
]

const Container=styled.footer`
display:flex;
justify-content:space-between;
align-items:center;
background-color:#000;
color:#fff;
height:20vh;
`;
const PartnersContainer=styled(Box)``;
const PartnersImage=styled.img`
width:110px;
height:100px;
`;

const IconContainer=styled(Box)`
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;
`;


const IconBox = styled(Box)`

`;
const IconText = styled(Typography)`

`;

export const Footer = () => {
 
  return (
    <Container> 
        <PartnersContainer>
        {logos.map(logo=>(
          <PartnersImage src={logo}/>
        ))} 
        </PartnersContainer>
        <Typography>&copy; {new Date().getFullYear()} / Стоил Стоилов / ПГКМКС "акад. Благовест Сендов" град Варна</Typography>
        <IconContainer>
          <IconText>Намерете ни в социалните мрежи</IconText>
          <IconBox>
            <Facebook/>
            <Instagram/>
          </IconBox>
          </IconContainer>
          
    </Container>
  )
}
