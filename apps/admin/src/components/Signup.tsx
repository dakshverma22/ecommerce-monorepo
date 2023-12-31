import { Card, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";

export const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 100,
        }}
      >
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            width: 400,
            gap: 10,
            padding: 30,
            border: "2px solid gray",
            borderRadius: 15,
          }}
        >
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Register as Administrator
          </Typography>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={userInfo.username}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={userInfo.email}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={userInfo.password}
          />
          <Button>Signup</Button>
        </Card>
      </div>
    </>
  );
};
