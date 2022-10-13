import React from "react";

const CustomPaginate = ({ postsPerPage, totalPosts, changePage }) => {
  const numberOfPage = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    numberOfPage.push(i);
  }

  return (
    <div>
      {numberOfPage.map((pageNumber) => (
        <button onClick={() => changePage(pageNumber)}>{pageNumber}</button>
      ))}
    </div>
  );
};

export default CustomPaginate;
