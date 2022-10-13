import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import List from "../components/List";
import "./Home.css";
import { useState } from "react";

import CustomPaginate from "../components/CustomPaginate";
function Home({ api, url, responseType, save }) {
  const [data, setData] = useState([]);
  const [postsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(true);

  const handleRes = () => {
    setResponse(false);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      console.log("API called");
      const res = await api;
      responseType ? setData(res.data.data.coins) : setData(res.data);

      setLoading(false);
    };
    getData();
    console.log(response);
  }, [currentPage, api, responseType, response]);
  console.log(data);
  const paginate = (p) => setCurrentPage(p);

  console.log(currentPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  console.log(indexOfFirstPost, indexOfLastPost);
  if (loading) {
    return <div>Loading...</div>;
  }

  const handleSave = (i) => {
    console.log(i);
    save(url + "/api/save", {
      name: i.name,
      price: i.price,
      symbol: i.symbol,
      iconUrl: i.iconUrl,
    });
  };

  return (
    <div className="HomeContainer Gradient">
      <div className="TitleWrapper Opacity">
        <Link to="/savedcrypto" onClick={handleRes}>
          <h1 className="Title">Crypto Listing</h1>
        </Link>
      </div>

      <div className="ListContainer">
        <List posts={currentPosts} handleSave={handleSave}></List>
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
