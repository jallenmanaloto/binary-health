import React, { useState, useContext } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import CurrentUser from "../../auth/CurrentUser";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const UserPersonal = () => {
  //setting context for current user details
  const { currentUser, headers } = useContext(CurrentUser);
  //setting state for button disable prop
  const [buttonDisable, setButtonDisable] = useState(true);

  //setting state to store changes in value of textfields
  const [firstName, setFirstName] = useState(currentUser.first_name);
  const [lastName, setLastName] = useState(currentUser.last_name);
  const [middleName, setMiddleName] = useState(currentUser.middle_name);
  const [birthday, setBirthday] = useState(
    currentUser.birthday !== "" ? "2020-01-01" : currentUser.birthday
  );
  const [gender, setGender] = useState(
    currentUser.gender === "" ? "Gender" : currentUser.gender
  );
  const [address, setAddress] = useState(
    currentUser.address === "" ? "" : currentUser.address
  );
  //setting state for uploading of vaccination card
  const [uploadFile, setUploadFile] = useState();

  //handling changes on each fields
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    e.target.value === currentUser.first_name
      ? setButtonDisable(true)
      : setButtonDisable(false);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    e.target.value === currentUser.last_name
      ? setButtonDisable(true)
      : setButtonDisable(false);
  };
  const handleMiddleName = (e) => {
    setMiddleName(e.target.value);
    e.target.value === currentUser.middle_name
      ? setButtonDisable(true)
      : setButtonDisable(false);
  };
  const handleBirthday = (e) => {
    setBirthday(e.target.value);
    e.target.value === currentUser.birthday
      ? setButtonDisable(true)
      : setButtonDisable(false);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
    e.target.value === currentUser.gender
      ? setButtonDisable(true)
      : setButtonDisable(false);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    e.target.value === currentUser.address
      ? setButtonDisable(true)
      : setButtonDisable(false);
  };

  //handling change on file textfield
  const handleFileChange = (e) => {
    e.persist();
    setUploadFile(e.target.files[0]);
    setButtonDisable(false);
  };

  //handling uploading file to cloudinary
  const handleSubmitFile = () => {
    const form = new FormData();
    form.append("image", uploadFile);
    form.append("upload_preset", "health-app");
    axios
      .post(`http://localhost:3001/api/v1/upload/${currentUser.id}`, form)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };

  //handling updates on personal details
  const handleUpdateDetails = () => {
    const data = {
      first_name: firstName,
      last_name: lastName,
      middle_name: middleName,
      birthday: birthday,
      gender: gender,
    };
    axios({
      method: "PATCH",
      url: `http://localhost:3001/api/v1/users/update_details/${currentUser.id}`,
      data: data,
      headers: {
        "access-token": headers.token,
        client: headers.client,
        expiry: headers.expiry,
        uid: headers.uid,
      },
    })
      .then((res) => {
        setButtonDisable(true);
      })
      .catch((err) => console.log(err));
    handleSubmitFile();
  };

  return (
    <Paper sx={{ height: "90vh", mt: { xs: 0, sm: -1, md: -1, lg: 0 } }}>
      <Grid container justifyContent="center">
        <Grid
          sx={{ backgroundColor: "#3376b5" }}
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Typography
            sx={{
              p: 2,
              textAlign: "left",
              color: "whitesmoke",
              fontWeight: 400,
            }}
            variant="h5"
          >
            Personal Details
          </Typography>
        </Grid>
        <Grid
          sx={{ mt: 14 }}
          container
          justifyContent="center"
          item
          spacing={3}
        >
          <Grid item xs={5} md={5} lg={5}>
            <TextField
              sx={{ width: "100%" }}
              label="First name"
              value={firstName}
              onChange={handleFirstName}
            />
          </Grid>
          <Grid item xs={5} md={5} lg={5}>
            <TextField
              sx={{ width: "100%" }}
              label="Last name"
              value={lastName}
              onChange={handleLastName}
            />
          </Grid>
        </Grid>
        <Grid sx={{ mt: 4 }} container justifyContent="center" item spacing={3}>
          <Grid item xs={5} sm={5} md={5} lg={5}>
            <TextField
              sx={{ width: "100%" }}
              label="Middle name"
              value={middleName}
              onChange={handleMiddleName}
            />
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <TextField
              label="Birthday"
              value={birthday}
              type="date"
              sx={{ width: "100%" }}
              onChange={handleBirthday}
            />
          </Grid>
          <Grid item xs={2} sx={2} md={2} lg={2}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                value={gender}
                label="Gender"
                onChange={handleGenderChange}
              >
                <MenuItem value="Gender" disabled>
                  Gender
                </MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            sx={{ mt: 1 }}
            container
            justifyContent="center"
            item
            spacing={3}
          >
            <Grid item xs={5} sm={5} md={5} lg={7}>
              <TextField
                label="Complete Address"
                sx={{ width: "100%" }}
                value={address}
                onChange={handleAddress}
              />
            </Grid>
            <Grid item xs={5} sm={5} md={5} lg={3}>
              <TextField
                sx={{ width: "100%" }}
                label="Email"
                value={currentUser.email}
                disabled
              />
            </Grid>
          </Grid>
          <Grid
            sx={{ mt: 1 }}
            container
            justifyContent="center"
            item
            spacing={3}
          >
            <Grid item xs={5} md={5} lg={5}>
              <TextField
                sx={{ width: "100%" }}
                label="Covid Status"
                value="Positive"
                disabled
              />
            </Grid>
            <Grid item xs={5} md={5} lg={5}>
              <FormControl fullWidth>
                <TextField
                  type="file"
                  sx={{ width: "100%" }}
                  onChange={handleFileChange}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            sx={{ mt: 1 }}
            container
            justifyContent="center"
            item
            spacing={3}
          >
            <Grid item xs={10} md={10} lg={10}>
              <Button
                variant="contained"
                sx={{
                  mt: { xs: 2, sm: 2, md: 2, lg: 2, xl: 2 },
                  ml: "50%",
                  transform: "translateX(-50%)",
                  width: "100%",
                  height: "3em",
                  backgroundColor: "#3376b5",
                }}
                disabled={buttonDisable}
                onClick={handleSubmitFile}
              >
                Update details
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserPersonal;
