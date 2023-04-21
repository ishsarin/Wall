import React from "react";

const Grid = () => {
  return (
    <>
      <div className="grid_wrapper">
        <div className="grid_top">
          <ul className="grid_top_ul">
            <li>Art 12%</li>
            <li>Utility 12%</li>
            <li
              style={{
                color: "rgba(162, 162, 162, 1)",
                border: "1px solid rgb(52 52 52)",
              }}
            >
              PFP 12%
            </li>
          </ul>
        </div>
        <div className="grid_middle">
          <ul className="grid_middle_ul">
            <li>Metaverse 12%</li>
            <li>Gaming 12%</li>
          </ul>
        </div>
        <div className="grid_end">
          <ul className="grid_end_ul">
            <li>PFP 12%</li>
            <li>ens 12%</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Grid;
