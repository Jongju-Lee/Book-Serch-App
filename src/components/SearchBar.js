import React from "react";
import { Button } from "@mui/material";
import TypeIt from "typeit-react";

const SearchBar = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit");
  };

  return (
    <form className="SearchBar" onSubmit={onSubmit}>
      <div className="search_bar_typeit">
        <TypeIt options={{ speed: 200, loop: true }}>
          아래에 책을 검색해 보아요!
        </TypeIt>
      </div>
      <input className="search_bar" placeholder="Search Book!" />
      <Button
        type="submit"
        id="search_btn"
        variant="contained"
        color="secondary"
        size="large"
      >
        검색
      </Button>
    </form>
  );
};

export default SearchBar;
