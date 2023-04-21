import React from "react";
import more_data from "../../content/more";

const More_highlights = () => {
  return (
    <div className="highlight_wrapper ">
      <ul className="more_highlights_ul">
        {more_data.map((i) => (
          <li>
            <div className="more">
              <img src={i.image} alt="" />
              <div className="more_time">{i.time}</div>
            </div>
            <div className="lower_info">
              <div className="more_title">{i.title}</div>
              <div className="lower">
                <div className="name_and_val">
                  <div className="lower_name more_lower_name">{i.name}</div>
                  <div className="val">{i.val}</div>
                </div>
                <div className="time_and_xp">
                  <div className="time">{i.floor}</div>

                  <div className="xp">
                    <span className="val2" style={{ paddingRight: "5px" }}>
                      {i.val2}
                    </span>
                    {i.xp}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default More_highlights;
