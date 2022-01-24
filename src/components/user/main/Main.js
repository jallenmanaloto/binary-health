import React from "react";
import Container from "@mui/material/Container";
import UserHome from "../userhome/UserHome";

const Main = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        pt: { xs: 0, sm: 10, md: 10, lg: 10 },
        overflowY: "scroll",
      }}
    >
      <UserHome />
    </Container>
  );
};

export default Main;
