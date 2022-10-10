import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import httpService from "../httpService";
import "./components.css";
function Paginate({ searched }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    await httpService.get("/live/get").then((data) => {
      setData(data.data.data.coins);
    });
  }
  console.log(data);
  const PER_PAGE = 5;
  const offset = currentPage * PER_PAGE;
  const currentPageData = data.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(data.length / PER_PAGE);
  console.log(currentPageData);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  function Items({ item }) {
    return item
      .filter((searchedItem) =>
        searchedItem.name.toLowerCase().includes(searched)
      )
      .map((i, index) => (
        <tr key={index} className="Opacity TableRow">
          <td className="TableData Sz-5">{i.name}</td>
          <td className="TableData Sz-3 symbol">
            <img src={i.iconUrl} className="Icon" alt="icon" />
            {i.symbol}
          </td>
          <td className="TableData Sz-3">{i.price}</td>
          <td className="TableData Sz-2">
            <button className="TableButton">Save</button>
          </td>
        </tr>
      ));
  }

  return (
    <div className="PaginateMainContainer">
      <table className="Table">
        <tbody className="tbody Table">
          <tr className="TableRow Opacity">
            <th className="TableHead Sz-5">Name</th>
            <th className="TableHead Sz-3">Symbol</th>
            <th className="TableHead Sz-3">Current Price</th>
            <th className="TableHead Sz-2">Button</th>
          </tr>
          <Items item={currentPageData}></Items>
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        breakLabel="..."
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"pageClass Opacity"}
        previousLinkClassName={"pagination__link"}
        pageRangeDisplayed={4}
        previousClassName={"prevPaginate Opacity"}
        nextClassName={"prevPaginate Opacity"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Paginate;
