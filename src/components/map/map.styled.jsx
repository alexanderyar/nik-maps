import { styled } from "@mui/material";
import { Box } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "50%",
  },
}));
