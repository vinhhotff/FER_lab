import * as React from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-1/2 p-11">
        <h1 className="text-6xl font-normal font-sans">
          Welcome to your expert community
        </h1>
      </div>

      <div className="w-1/2 flex flex-col place-items-start justify-center ">
        <div
          sx={{
            width: 350,
            margin: "auto",
            padding: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "white",
          }}
        >
          <Typography
            className="text-center "
            variant="h2"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            SIGN <span style={{ color: "blue" }}>IN</span>
          </Typography>
          <TextField
            fullWidth
            label="USERNAME"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="PASSWORD"
            type="password"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "black", color: "white", mb: 2 }}
          >
            SIGN IN
          </Button>
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            sx={{ mb: 2 }}
          >
            <FormControlLabel control={<Checkbox />} label="Remember me" />
            <Typography variant="body2" sx={{ cursor: "pointer" }}>
              Forgot password?
            </Typography>
          </Box>
          <Typography className="text-center " variant="h6">
            Don't have an account?{" "}
            <span style={{ cursor: "pointer", color: "blue" }}>Register</span>
          </Typography>
        </div>
        <Box display="flex" justifyContent="center" gap={16} marginTop={7}>
          <GoogleIcon
            sx={{ fontSize: 80, color: "#DB4437", cursor: "pointer" }}
          />
          <FacebookIcon
            sx={{ fontSize: 80, color: "#1877F2", cursor: "pointer" }}
          />
          <TwitterIcon
            sx={{ fontSize: 80, color: "#1DA1F2", cursor: "pointer" }}
          />
        </Box>
      </div>
    </div>
  );
}
