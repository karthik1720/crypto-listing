import React from "react";
import HeroCard from "../components/HeroCard";
import List from "../components/List";
import "./Home.css";
import { useState } from "react";
function Home() {
  const [searched, setSearched] = useState("");
  return (
    <div className="HomeContainer Gradient">
      <div className="TitleWrapper Opacity">
        <h1 className="Title">Crypto Listing</h1>
      </div>
      <div className="HeroCardContainer">
        <HeroCard></HeroCard>
        <HeroCard></HeroCard>
        <HeroCard></HeroCard>
      </div>
      <input
        type="search"
        className="Search Opacity"
        placeholder="Search..."
        id=""
        onChange={(e) => {
          setSearched(e.target.value.toLowerCase());
        }}
      />
      <div className="ListContainer">
        <List searched={searched}></List>
      </div>
    </div>
  );
}

export default Home;
