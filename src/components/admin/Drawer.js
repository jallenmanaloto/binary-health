import React, { useState, useContext } from "react";
import { drawerStyle } from "../styles/Styles";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AdminNavigation from "./context/AdminNavigations";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SourceIcon from "@mui/icons-material/Source";

const Drawer = () => {
  const drawerStyles = drawerStyle();
  const { setNavigation } = useContext(AdminNavigation);

  // set state for collapse option on reports
  const [open, setOpen] = useState(false);

  //handle opening of collapse option on reports
  const handleCollapse = () => {
    setOpen(!open);
  };

  return (
    <Paper
      className={drawerStyles.root}
      sx={{
        borderRadius: "0",
        display: { xs: "none", sm: "none", md: "block" },
        width: { md: "30vw", lg: "30vw", xl: "13vw" },
      }}
      elevation={0}
    >
      <List sx={{ marginTop: "15em" }} component="nav">
        <ListItemButton onClick={() => setNavigation("home")}>
          <ListItemIcon>
            <HomeIcon sx={{ marginLeft: "1rem" }} />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ fontSize: "1.2em" }}
            className={drawerStyles.navigationText}
            primary="Home"
          />
        </ListItemButton>
        <ListItemButton onClick={() => setNavigation("request")}>
          <ListItemIcon>
            <SourceIcon sx={{ marginLeft: "1rem" }} />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ fontSize: "1.2em" }}
            className={drawerStyles.navigationText}
            primary="Requests"
          />
        </ListItemButton>
        <ListItemButton onClick={handleCollapse}>
          <ListItemIcon>
            <AssignmentIcon sx={{ marginLeft: "1rem" }} />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ fontSize: "1.2em" }}
            className={drawerStyles.navigationText}
            primary="Reports"
          />
          {open ? (
            <ExpandLess className={drawerStyles.expandIcon} />
          ) : (
            <ExpandMore className={drawerStyles.expandIcon} />
          )}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 7 }}
              onClick={() => setNavigation("establishment")}
            >
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "1.1em", ml: "-1rem" }}
                className={drawerStyles.navigationText}
                primary="Establishments"
              />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 7 }}
              onClick={() => setNavigation("cases")}
            >
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "1.1em", ml: "-1rem" }}
                className={drawerStyles.navigationText}
                primary="Cases"
              />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Paper>
  );
};

export default Drawer;
