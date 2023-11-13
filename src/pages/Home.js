import React from "react";
import AppLayout from "../components/AppLayout";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./Home.css";
import Toolbar from "../components/Toolbar";

const Home = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <AppLayout>
      <Toolbar />
    </AppLayout>
  );
};

export default Home;
