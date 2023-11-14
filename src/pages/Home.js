import React from "react";
import AppLayout from "../components/AppLayout";
import SearchBar from "../components/SearchBar";
import HotChart from "../components/HotChart";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <AppLayout>
      <div id="search_bar_wrapper">
        <SearchBar />
      </div>
      <div id="hot_chart_wrapper">
        <HotChart />
      </div>
      <div id="nav_bar_wrapper">
        <NavBar />
      </div>
    </AppLayout>
  );
};

export default Home;
