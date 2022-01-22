import React from "react";
import AppBar from "@mui/material/AppBar";
import ArticleIcon from "@mui/icons-material/Article";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

const UserAppbar = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{ top: "auto", bottom: 0, display: { xs: "block", sm: "none" } }}
      >
        <Toolbar>
          <Grid
            container
            flexDirection="row"
            justifyContent="center"
            spacing={2}
          >
            <Grid item xs={3}>
              <IconButton>
                <HomeIcon />
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <IconButton>
                <PersonIcon />
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <IconButton>
                <ArticleIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default UserAppbar;
