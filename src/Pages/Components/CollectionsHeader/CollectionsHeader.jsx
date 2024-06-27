import React from "react";
import { Link } from "react-router-dom";

const CollectionsHeader = ({ title, button, link }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-6xl  font-bold">{title}</h1>
      <Link to={link}>
        <button className="btn secondary-button text-white">{button}</button>
      </Link>
    </div>
  );
};

export default CollectionsHeader;
