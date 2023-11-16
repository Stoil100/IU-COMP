import React from 'react'
import ProfileCircle from '../Components/ProfileCircle';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import background from "../Assets/profileBg.jpg"
const Container=styled(Box)`
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
padding-top:20px;
height:120vh;
background-image: url(${background});
background-size: cover;
`;


export default function ProfilePage() {
  return (
    <Container>
        <ProfileCircle/>
    </Container>
  )
}
