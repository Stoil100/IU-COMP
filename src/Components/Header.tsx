import React, { useState } from "react";
import styled from "@emotion/styled";
import { Typography, Button, Drawer,TextField } from "@mui/material";
import logo from "../Assets/logo.png"
import {

  Menu,
  
} from "@mui/icons-material";
import LanguageInput from "./LanguageInput";

import { DrawerSlider } from "./DrawerSlider";
const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100vw;
  height: fit-content;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// const StyledDrawer = styled(SwipeableDrawer)`
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// gap:10px;
// padding: 10px;
// `;
const Image=styled.img`
border-radius:50%;
widht:80px;
height:80px;
`;
export const Header = () => {
 
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          startIcon={<Menu />}
        />
        <Image src={logo}></Image>
        <LanguageInput />
        <TextField id="outlined-basic" label="Search" variant="outlined" />
      </Container>
   
    <DrawerSlider open={open} onClose={()=>{setOpen(false)}}/>
    </>
  );
};
