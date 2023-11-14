import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Grid container>
      <Grid item xs={6} sm={6} md={3}>
        <div className="nav_bar_wrapper">
          <Link className="nav_link">comic</Link>
        </div>
      </Grid>
      <Grid item xs={6} sm={6} md={3}>
        <div className="nav_bar_wrapper">
          <Link className="nav_link">novel</Link>
        </div>
      </Grid>
      <Grid item xs={6} sm={6} md={3}>
        <div className="nav_bar_wrapper">
          <Link className="nav_link">essay</Link>
        </div>
      </Grid>
      <Grid item xs={6} sm={6} md={3}>
        <div className="nav_bar_wrapper">
          <Link className="nav_link">education</Link>
        </div>
      </Grid>
    </Grid>
  );
};

export default NavBar;
