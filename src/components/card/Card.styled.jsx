import { styled } from "@mui/material";

export const StyledImg = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "90%",
}));
