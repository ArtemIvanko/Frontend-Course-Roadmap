import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Header = () => (
  <StyledHeader>
    <HomeBlock>
      <StyledNavLink to={"/"}>Home</StyledNavLink>
    </HomeBlock>
    <NavigationBlock>
      <StyledNavLink to={"/todo"}>Todo</StyledNavLink>
      <StyledNavLink to={"/swapi"}>Swapi</StyledNavLink>
    </NavigationBlock>
  </StyledHeader>
);

const StyledHeader = styled("div")({
  width : "100%",
  height : "60px",
  backgroundColor : "lightblue",
  display : "flex",
  justifyContent : "space-between",
});

const HomeBlock = styled("div")({
  display : "flex",
  justifyContent : "center",
  alignItems : "center",
  height : "100%",
  fontSize : "24px",
});

const NavigationBlock = styled("div")({
  display : "flex",
  justifyContent : "center",
  alignItems : "center",
  fontSize : "24px",
});

const StyledNavLink = styled(NavLink)({
  color : "black",
  textDecoration : "none",
  margin : "0 10px",
  "&.active" : {
    color : "red",
  },
});