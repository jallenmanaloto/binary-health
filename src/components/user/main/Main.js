import React from "react";
import Container from "@mui/material/Container";
import UserHome from "../userhome/UserHome";

const Main = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        pt: { xs: 0, sm: 5, md: 5, lg: 5 },
        overflowY: "scroll",
      }}
    >
      <UserHome />
    </Container>
  );
};

export default Main;
