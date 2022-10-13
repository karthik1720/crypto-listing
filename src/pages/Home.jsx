import React, { useEffect } from "react";

import List from "../components/List";
import "./Home.css";

import { useState } from "react";
import axios from "axios";
import CustomPaginate from "../components/CustomPaginate";
function Home() {
  const [data, setData] = useState([]);
  const [postsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      console.log("API called");
      const res = await axios.get(
        "https://karthik-crypto.herokuapp.com/live/get"
      );
      setData(res.data.data.coins);
      setLoading(false);
    };
    getData();
  }, []);

  const paginate = (p) => setCurrentPage(p);

  console.log(currentPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  console.log(indexOfFirstPost, indexOfLastPost);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="HomeContainer Gradient">
      <div className="TitleWrapper Opacity">
        <h1 className="Title">Crypto Listing</h1>
      </div>
      <div className="HeroCardContainer">
        {/* <HeroCard></HeroCard>
        <HeroCard></HeroCard>
        <HeroCard></HeroCard> */}
      </div>

      <div className="ListContainer">
        <List posts={currentPosts}></List>
      </div>
      <CustomPaginate
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        changePage={paginate}
      ></CustomPaginate>
    </div>
  );
}
export default Home;
