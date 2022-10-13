import React from "react";

import "./components.css";

function List({ posts }) {
  return (
    <div>
      <table className="Table">
        <tbody>
          <tr className="TableRow Opacity">
            <th className="TableHead Sz-5">Name</th>
            <th className="TableHead Sz-3">Symbol</th>
            <th className="TableHead Sz-2">Current Price</th>
            <th className="TableHead Sz-2">Button</th>
          </tr>
          {posts.map((i, index) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
