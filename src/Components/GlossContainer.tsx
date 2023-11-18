import React from 'react'
import styled from "@emotion/styled";
import {Box} from "@mui/material";
const Container=styled(Box)`
background: rgba(78, 78, 78, 0.1);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(78, 78, 78, 0.3);
padding:10px;
margin-bottom:10px;
`;
 const GlossContainer:React.FC<React.PropsWithChildren>=({children})=> {
  return (
    <Container>{children}</Container>
  )
}

export default GlossContainer;