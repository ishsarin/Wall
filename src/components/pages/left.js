import React from "react";
import dp from "../../media/dp.png";
import img1 from "../../media/1.png";
import img2 from "../../media/2.png";
import img3 from "../../media/3.png";
import img4 from "../../media/4.png";
import Grid from "./grid";
import { FaTwitter } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Left = () => {
  return (
    <>
      <div className="left">
        <div className="left_wrapper">
          <div className="left_img">
            <img src={dp} alt="" />
          </div>
          <div className="left_text">
            <div>dingaling.eth</div>
            <div className="left_text_sub">0xadgf....jkld</div>
          </div>
        </div>
        <div className="left_wrapper_level">LVL 2</div>

        <div className="twitter">
          <span className="twitter_logo">
            <FaTwitter
              size={20}
              color="rgba(29, 155, 240, 1)"
              style={{ paddingRight: "8px" }}
            />{" "}
            @dingalingts
          </span>

          <span className="world">
            <TbWorld color="rgba(162, 162, 162, 1)" size={20} />
          </span>
        </div>

        <div className="text">
          An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and
          owner of 📦 @nftboxes
        </div>

        <div className="communities">
          <div>Common Communities (3)</div>
        </div>

        <div className="list_wrapper">
          <ul className="ul_img">
            <li>
              <img src={img1} alt="" />
            </li>
            <li>
              <img src={img2} alt="" />
            </li>
            <li>
              <img src={img3} alt="" />
            </li>
            <li>
              <img src={img4} alt="" />
            </li>
          </ul>
        </div>
        <Grid />

        <div className="subs">
          <div>
            Subscribe <FaGreaterThan size={10} />
            <FaGreaterThan size={10} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
