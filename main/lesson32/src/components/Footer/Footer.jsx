import { styled } from "@mui/material";

export const Footer = () => (
  <StyledFooter>
    <div>test</div>
    <p>© 2021</p>
  </StyledFooter>
);

const StyledFooter = styled("div")({
  width : "100%",
  backgroundColor : "grey",
  display : "flex",
  justifyContent : "space-between",
  alignItems : "center",
});
