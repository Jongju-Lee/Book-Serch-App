import { Breadcrumbs, Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeIcon from "@mui/icons-material/Home";

const AppLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="AppLayout">
      <div className="nav_top">
        <Grid2 container>
          <Grid2 item xs={5} sm={8} md={12}>
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
            </Breadcrumbs>
          </Grid2>
          <Grid2 item>
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
          </Grid2>
        </Grid2>
      </div>
      <div className="nav_bottom"></div>
      <Container fixed>{children}</Container>
    </div>
  );
};

export default AppLayout;
