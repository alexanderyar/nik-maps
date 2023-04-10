// import styled from "styled-components";
import { styled } from "@mui/material";
import { Box } from "@mui/material";
// export const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.8);
//   z-index: 100;
// `;

// export const ModalWindow = styled.div`
//   max-width: calc(75vw - 48px);
//   max-height: calc(75vh - 24px);
//   z-index: 200;
// `;

export const Overlay = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  zIndex: "100",
}));

export const ModalWindow = styled(Box)(({ theme }) => ({
  maxWidth: "calc(100vw - 48px)",
  maxHeight: "calc(100vh - 24px)",
  zIndex: "200",
  [theme.breakpoints.up("md")]: {
    maxWidth: "calc(75vw - 48px)",
    maxHeight: "calc(100vh - 24px)",
  },
}));
