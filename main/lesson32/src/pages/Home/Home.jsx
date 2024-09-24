import { styled, Typography } from "@mui/material";

export const Home = () => (
  <div>
    <SectionBlock>
      <Typography variant="h5">
        Hi there!
      </Typography>
      <Typography variant="body1">
        I'm a passionate Frontend developer with expertise in JavaScript, HTML, and CSS. Skilled in React, Git, and
        SASS, I have hands-on experience creating web applications and designing user interfaces. I thrive in
        collaborative environments, leveraging strong communication and teamwork abilities to contribute effectively.
        Seeking opportunities to further enhance my skills and make a valuable impact in a stable company committed to
        innovation.
      </Typography>
    </SectionBlock>
    <SectionBlock>
      <Typography variant="h5">
        Skills:
      </Typography>
      <Typography variant="body1">
        - JavaScript, HTML, CSS, React, Git, SASS
      </Typography>
    </SectionBlock>
  </div>
);

const SectionBlock = styled("div")({
  display : "flex",
  justifyContent : "center",
  flexDirection : "column",
  height : "100%",
  fontSize : "24px",
});
