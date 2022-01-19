import React, { useState } from "react";
import { drawerStyle } from "../styles/Styles";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SourceIcon from "@mui/icons-material/Source";

const Drawer = () => {
  const drawerStyles = drawerStyle();

  // set state for collapse option on reports
  const [open, setOpen] = useState(true);

  //handle opening of collapse option on reports
  const handleCollapse = () => {
    setOpen(!open);
  };

  return (
    <Paper className={drawerStyles.root} sx={{ borderRadius: "0" }}>
      <List sx={{ marginTop: "15em" }} component="nav">
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon sx={{ marginLeft: "1rem" }} />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ fontSize: "1.2em" }}
            className={drawerStyles.navigationText}
            primary="Home"
          />
        </ListItemButton>
        <ListItemButton>
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
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText
                primaryTypographyProps={{ fontSize: "1.1em" }}
                className={drawerStyles.navigationText}
                primary="Establishments"
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText
                primaryTypographyProps={{ fontSize: "1.1em" }}
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
