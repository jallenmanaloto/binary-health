import React, { useState, useContext } from "react";
import axios from "axios";
import { appbarStyle } from "../styles/Styles";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import CurrentUser from "../auth/CurrentUser";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Appbar = () => {
  //setting value for headers
  const { headers } = useContext(CurrentUser);

  //declaring navigation for logout
  let navigate = useNavigate();

  //setting styles for component
  const appbarStyles = appbarStyle();

  //setting state for anchor of menu
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorOpen, setAnchorOpen] = useState(false);

  //handling menu
  const handleMenu = (evt) => {
    setAnchorEl(evt.currentTarget);
    setAnchorOpen(true);
  };

  const handleCloseMenu = () => {
    setAnchorOpen(false);
  };

  //handling logout
  const handleLogout = () => {
    axios({
      method: "DELETE",
      url: "http://localhost:3001/auth/sign_out",
      headers: {
        "access-token": headers.token,
        client: headers.client,
        expiry: headers.expiry,
        uid: headers.uid,
      },
    })
      .then(navigate("/register"))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <AppBar
        sx={{
          width: {
            xs: "100vw",
            sm: "100vw",
            md: "75vw",
            lg: "75vw",
            xl: "87vw",
          },
        }}
        className={appbarStyles.appbar}
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h6">Admin Access</Typography>
          <div className={appbarStyles.accountButton}>
            <IconButton onClick={handleMenu}>
              <AccountCircle
                sx={{ fontSize: "1.5em" }}
                className={appbarStyles.accountCircle}
              />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              open={anchorOpen}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu}>My Account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
