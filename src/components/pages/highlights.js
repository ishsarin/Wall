import React from "react";
import data from "../../content/content";
// import img from "../../media/5.png";
import More_highlights from "./more_highlights";
const Highlights = () => {
  return (
    <div className="highlight_wrapper">
      <ul className="highlights_ul">
        {data.map((i) => (
          <li>
            <div className="upper">
              <img src={i.image} alt="" />
              <div className="title_and_sub">
                <div className="title">{i.title}</div>
                <div className="sub" style={{ color: `${i.col}` }}>
                  {i.sub}
                </div>
              </div>
            </div>
            <div className="lower">
              <div className="name_and_val">
                <div className="lower_name">{i.name}</div>
                <div className="val">{i.val}</div>
              </div>
              <div className="time_and_xp">
                <div className="time">{i.time}</div>
                <div className="xp">{i.xp}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <More_highlights />
    </div>
  );
};

export default Highlights;
