import { Breadcrumbs, Container, Grid } from "@mui/material";
import React from "react";
import "./AppLayout.css";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeIcon from "@mui/icons-material/Home";

const AppLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="AppLayout">
      <div className="nav_top">
        <Grid container>
          <Grid item md={12}>
            <Breadcrumbs separator="|">
              <Link className="link" to={"/"}>
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                HOME
              </Link>
              <Link className="link" to={"/comic"}>
                COMIC
              </Link>
              <Link className="link" to={"/novel"}>
                NOVEL
              </Link>
              <Link className="link" to={"/essay"}>
                ESSAY
              </Link>
              <Link className="link" to={"/edu"}>
                EDUCATION
              </Link>
              <Link className="link" to={"/searchRes"}>
                SEARCH
              </Link>
            </Breadcrumbs>
          </Grid>
          <Grid item md={12}>
            <Breadcrumbs
              separator="|"
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                float: "right",
              }}
            >
              <Link className="link" to={"/myPage"}>
                MY PAGE
              </Link>
              <ShoppingCartOutlinedIcon
                className="cart_icon"
                onClick={() => navigate("/cart")}
                style={{
                  color: "white",
                  position: "relative",
                  top: "0.2rem",
                  right: "0.1rem",
                }}
              ></ShoppingCartOutlinedIcon>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </div>
      <div className="nav_bottom"></div>
      <Container className="container" maxWidth="lg">
        {children}
      </Container>
    </div>
  );
};

export default AppLayout;
