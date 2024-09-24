import { Header } from "../components/Header";
import { Router } from "../router";
import { Footer } from "../components/Footer";
import { styled } from "@mui/material";

export const RootContainer = () => {
  return (
    <StyledRootContainer>
      <Header/>
      <Router/>
      <Footer/>
    </StyledRootContainer>
  );
};

const StyledRootContainer = styled("div")({
  display : "flex",
  flexDirection : "column",
  justifyContent : "space-between",
  alignItems : "center",
  width : "100%",
  height : "100vh",
});