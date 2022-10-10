import React from "react";

import "./components.css";

import Paginate from "./Paginate";
function List({ searched }) {
  return (
    <div>
      {/* <table className="Table">
        <tr className="TableRow Opacity">
          <th className="TableHead Sz-5">Name</th>
          <th className="TableHead Sz-3">Symbol</th>
          <th className="TableHead Sz-2">Current Price</th>
          <th className="TableHead Sz-2">Button</th>
        </tr> */}
      {/* <PaginatedItems itemsPerPage={5}></PaginatedItems> */}
      <Paginate searched={searched}></Paginate>
      {/* </table> */}
    </div>
  );
}

export default List;
