import { Outlet } from "react-router-dom";
import React from 'react';
import {
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { green, purple } from "@mui/material/colors";

export const ControlPanel = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return(
    <div>
      <h2>dashboard</h2>
      <ThemeProvider theme={theme}>
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </ThemeProvider>
    </div>
  );
};