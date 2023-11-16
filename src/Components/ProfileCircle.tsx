import React, { useState, useEffect } from "react";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import {
  Box,
  CircularProgress,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import htmlIcon from "../Assets/html.svg";
import cssIcon from "../Assets/css.svg";
import jsIcon from "../Assets/js.svg";
import tsIcon from "../Assets/ts.svg";
import reactIcon from "../Assets/react.svg";
import nodeIcon from "../Assets/node.svg";
import csharpIcon from "../Assets/csharp.svg";
import cppIcon from "../Assets/cpp.svg";
import profilePicture from "../Assets/profilePicture.jpg";
import { useSprings, animated } from "@react-spring/web";
import useWindowVisibility from "../Hooks/useWindowVisibility";

const items = [
  { icon: htmlIcon, progress: 95 },
  { icon: cssIcon, progress: 90 },
  { icon: jsIcon, progress: 87 },
  { icon: tsIcon, progress: 89 },
  { icon: reactIcon, progress: 93 },
  { icon: nodeIcon, progress: 56 },
  { icon: csharpIcon, progress: 76 },
  { icon: cppIcon, progress: 48 },
];
const rotateValues: string[] = items.map(
  (_, i) => `${(360 / items.length) * (i + 1) * (items.length - 1)}deg`
);

const theme = createTheme({
  palette: {
    primary: {
      main: "#ade8f4",
    },
    secondary: {
      main: "#f44336",
    },
  },
});
const rotateBoxAnimation = keyframes`
from {
  transform: rotateZ(0deg);
}
to {
  transform: rotateZ(360deg);
}
`;
const ProfileBox = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 50%;
  // box-shadow: -5px -5px  10px gray;
`;
const Li = styled(Box)`
  position: absolute;
  width: 80px;
  height: 80px;
  box-sizing: border-box;
  padding: 10px;
  background-color: #282c34;
  border-radius: 50%;
  list-style: none;
  transform-origin: 300px;
  left: 0;
  z-index: 2;
`;
const CircularProgressBox = styled(animated.div)`
  position: absolute;
  top: -5px;
  left: -5px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 5px 5px 10px gray;
`;

const ProfileCircle = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const isVisible = useWindowVisibility();

  useEffect(() => {
    if (isVisible && hasLoaded) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [isVisible, hasLoaded]);
  
  const springs = useSprings(
    rotateValues.length,
    rotateValues.map((item, i) => ({
      id: i,
      loop: true,
      from: {
        transform: isActive
          ? `rotateZ(0deg) rotate(${item})`
          : `rotate(${item})`,
      },
      to: {
        transform: isActive
          ? `rotateZ(-360deg) rotate(${item})`
          : `rotate(${item})`,
      },
      config: { duration: isActive ? 10000 : 0 },
    }))
  );

  const Image = styled.img`
    width: 90%;
    height: 90%;
    border-radius: 50%;
    padding: 80px;
    box-sizing: border-box;
    animation: ${isActive && `antiRotate 10s linear infinite`};
    border: 10px solid #bbd0ff;
    @keyframes antiRotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <ProfileBox
        component="ul"
        sx={{
          animation: isActive
            ? ` ${rotateBoxAnimation} 10s linear infinite`
            : "",
        }}
      >
        {springs.map((props, i) => (
          <Li
            component="li"
            sx={{
              transform: `rotate(calc(360deg/${items.length}*${i + 1}))`,
            }}
          >
            <CircularProgressBox style={props}>
              <CircularProgress
                thickness={2}
                color="primary"
                variant="determinate"
                size={90}
                value={items[i].progress}
              />
            </CircularProgressBox>
            <animated.img src={items[i].icon} width={"100%"} style={props} />
          </Li>
        ))}
        <Image
          src={profilePicture}
          onClick={() => {
            setHasLoaded(true);
          }}
        />
      </ProfileBox>
    </ThemeProvider>
  );
};

export default ProfileCircle;
