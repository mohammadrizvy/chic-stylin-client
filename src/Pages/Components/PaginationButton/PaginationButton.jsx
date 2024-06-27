import React from "react";

const PaginationButton = () => {
  return (
    <div className="join grid grid-cols-2 mb-10 w-[30%] mx-auto">
      <button className="join-item btn btn-outline">Previous page</button>
      <button className="join-item btn btn-outline">Next</button>
    </div>
  );
};

export default PaginationButton;
