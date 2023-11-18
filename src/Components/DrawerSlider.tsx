import React from 'react'
import {
    Group,
    CalendarToday,
    CorporateFare,
    Accessibility,
    EmojiEvents,
    Info,
    Menu,
    
  } from "@mui/icons-material";
  import { Typography, Button, Drawer } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  import styled from "@emotion/styled";

interface Props{
    open: boolean;
    onClose: ()=>void;
}

const SwiderBox = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 90%;
`;
const SwiderText = styled(Typography)``;


export const DrawerSlider = ({open,onClose}:Props) => {
    const navigation=useNavigate();
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => {
        onClose();
      }}
      PaperProps={{
        sx: {
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        },
      }}
    >
      <SwiderBox variant="contained" startIcon={<Group />}>
        <SwiderText>Участници</SwiderText>
      </SwiderBox>
      <SwiderBox
        variant="contained"
        startIcon={<CalendarToday />}
        onClick={() => {
          navigation("/IU-COMP/Program");
        }}
      >
        <SwiderText>Програма</SwiderText>
      </SwiderBox>
      <SwiderBox
        variant="contained"
        startIcon={<CorporateFare />}
        onClick={() => {
          navigation("/IU-COMP/Organizators");
        }}
      >
        <SwiderText>Организатори</SwiderText>
      </SwiderBox>
      <SwiderBox
        variant="contained"
        startIcon={<Accessibility />}
        onClick={() => {
          navigation("/IU-COMP/Conditions");
        }}
      >
        <SwiderText>Условия за участие</SwiderText>
      </SwiderBox>
      <SwiderBox
        variant="contained"
        startIcon={<EmojiEvents />}
        onClick={() => {
          navigation("/IU-COMP/Prizes");
        }}
      >
        <SwiderText>Награди</SwiderText>
      </SwiderBox>

      <SwiderBox
        variant="contained"
        startIcon={<Info />}
        onClick={() => {
          navigation("IU-COMP/info");
        }}
      >
        <SwiderText>За учасника</SwiderText>
      </SwiderBox>
    </Drawer>
  );
}
