import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Header from "./Header";
import "./FirstContainer.css";

function FirstContainer() {
  return (
    <div className="first-container">
      <Header></Header>
      <div
        className="background-image overlay"
        style={{
          backgroundImage: `linear-gradient(
      180deg,
      rgba(11, 29, 38, 0.6) 0%,
      rgba(11, 29, 38, 0.2) 45%,
      rgba(11, 29, 38, 1)100%
    ),
    linear-gradient(0deg, rgba(11, 29, 38, 0.35), rgba(11, 29, 38, 0.35)),
    url("../public/images/first.png")`,
        }}
      >
        <div className="over-image-content">
          <div className="over-image-content-value">
            <div className="bar"></div>
            <div className="over-image-content-head">THE CITY OF DESTINY</div>
          </div>
          <div className="over-image-content-explore">
            explore Visakhapatnam
          </div>
          <div className="over-image-content-search">
            <Box
              className="search-box"
              sx={{
                width: 600,
                maxWidth: "100%",
              }}
            >
              <TextField
                className="over-image-content-search"
                fullWidth
                label="Search places, hotels, and more ..."
                id="fullWidth"
                InputLabelProps={{
                  style: {
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                  }, // Change label color to white and align vertically
                  sx: {
                    "@media (max-width: 768px)": {
                      fontSize: "10px", // Adjust font size for mobile screens
                    },
                  },
                }}
                InputProps={{
                  style: {
                    color: "white", // Change text color to white
                  },
                  classes: {
                    notchedOutline: "white-border", // Apply custom class for border color
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon style={{ color: "white" }} />{" "}
                      {/* Set color of the search icon */}
                    </InputAdornment>
                  ),
                  sx: {
                    "@media (max-width: 768px)": {
                      height: "42px", // Adjusted height for mobile screens
                    },
                  },
                }}
                variant="outlined" // Use outlined variant for custom border
                sx={{
                  "@media (max-width: 768px)": {
                    width: "100%", // Adjusted width for mobile screens
                  },
                }}
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstContainer;
