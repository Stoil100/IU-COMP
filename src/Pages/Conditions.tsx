import React, { useState,useRef } from "react";
import {useForm} from "react-hook-form"
import { TextField, Button, Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import mainLogo from "../Assets/logo.png"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GlossContainer from "../Components/GlossContainer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#219ebc",
      contrastText: "#fff",
    },
    secondary: {
      main: "#000",
      contrastText: "#fff",
    },
  },
});

const isMobile=window.innerWidth<=768;

const Container=styled(Box)`
display:flex;
justify-content:space-around;
align-items: center;
height:100vh;
gap:10px;
`;


const FormBox = styled(Box)`
  width: 550px;
  height: 600px;
  max-height:90vh;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: #8ecae6;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  z-index: 2;

  @media (max-width: 570px) {
    width:300px;
    height:700px;
  }

  @media (max-width:320px){
    width:200px;
  }
};`;

const TitleBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const TitleImg = styled.img`
  width: 100px;
  border: 1px solid #023047;
  border-radius: 50%;
  background-color: #fff;

  @media (max-width: 570px) {
    width: 60px;
  }
`;
const ContactBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  @media (max-width: 570px) {
    flex-direction: column;
    text-align: center;
  }
`;

interface FormValues {
  name: string;
  email: string;
  telephone?: string;
  message: string;
}

export const ConditionsPage = () => {
  const formRef = useRef();
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [isDone,setIsDone]=useState(false);
  const handleInfo = async (data: FormValues) => {
    setIsDone(true);
    reset();
  };
  return (
    <ThemeProvider theme={theme}>
        <Container>
            <GlossContainer>
            <Box sx={{ display: "flex",width:"400px", justifyContent: "center" ,flexDirection:"column"}}>
            <Typography variant="h5" sx={{ fontFamily: "Montserrat Alternates" }}>
                 За да се запишете на турнира трябва да имате навършени 12г.Също така да живеете в град Варна. Трябва и да имате основни умения как се работи с компютър
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat Alternates" }}>
                 Такса за участие:10лв
                </Typography>
              </Box>

            </GlossContainer>
      <FormBox
        component="form"
        onSubmit={handleSubmit(handleInfo)}
        ref={formRef}
        sx={{ mt: 1     }}
      >
        <TitleBox>
          <TitleImg src={mainLogo} alt="Company Logo" />
          <Typography
            variant={isMobile ? "h5" : "h4"}
            sx={{
              color: "#023047",
              fontFamily: "Montserrat Alternates",
            }}
          >
            {isDone ? "Успешно се записахте за състезанието":" Запишете се за състезанието"}
          
          </Typography>
        </TitleBox>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <TextField
            margin="normal"
            color="secondary"
            required
            fullWidth
            id="name"
            label="Име"
            {...register("name", { required: "Required" })}
            sx={{
              backgroundColor: "#669bbc",
              borderRadius: "5px",
              "& fieldset": { border: "none" },
            }}
            disabled={isDone}
          />
          <TextField
            margin="normal"
            color="secondary"
            required
            fullWidth
            id="email"
            label="Имейл"
            autoComplete="email"
            {...register("email", { required: "Required" })}
            sx={{
              backgroundColor: "#669bbc",
              borderRadius: "5px",
              "& fieldset": { border: "none" },
            }}
            disabled={isDone}
          />
          <TextField
            margin="normal"
            color="secondary"
            fullWidth
            label="Телефон (optional)"
            type="telephone"
            id="telephone"
            autoComplete="telephone"
            {...register("telephone", { required: false })}
            sx={{
              backgroundColor: "#669bbc",
              borderRadius: "5px",
              "& fieldset": { border: "none" },
            }}
            disabled={isDone}
          />
          <TextField
            multiline
            color="secondary"
            rows={4}
            margin="normal"
            required
            fullWidth
            label="Любима игра"
            type="message"
            id="message"
            {...register("message", { required: true })}
            sx={{
              backgroundColor: "#669bbc",
              borderRadius: "5px",
              "& fieldset": { border: "none" },
            }}
            disabled={isDone}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <ContactBox>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, flex: 1 }}
                disabled={isDone}
              >
               {isDone ? "Успешно се записахте за състезанието":"Изпрати"}
              </Button>
             
            </ContactBox>
          </Box>
        </Box>
      </FormBox>
      </Container>
    </ThemeProvider>
  );
};
