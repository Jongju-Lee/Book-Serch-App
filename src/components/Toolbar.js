import { TextField } from "@mui/material";
import React from "react";
import "./Toolbar.css";

const Toolbar = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Toolbar">
      <form onSubmit={onSubmit}>
        <TextField
          sx={{
            input: { color: "white" },
            background: "#f0f0f0",
            borderRadius: 20,
            border: "3px solid purple",
          }}
          hiddenLabel
          autoFocus={true}
          color="secondary"
          id="filled-hidden-label-normal"
          placeholder="Search"
          variant="outlined"
        />
      </form>
    </div>
  );
};

export default Toolbar;
