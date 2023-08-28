import React, { useState } from "react";
import SplitPane, { Pane } from "split-pane-react";

import "split-pane-react/esm/themes/default.css";
import Landingpg from "./Landingpg";
import { FaHome } from "react-icons/fa";
import { MdSavings } from "react-icons/md";
import { FiTarget } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import Card from "./Store/Card";
import { Link } from "react-router-dom";
import Cards from "./Store/Cards";

export default function App() {
  const [sizes, setSizes] = useState([100, "30%", "auto"]);

  const layoutCSS = {
    height: "100%",

    alignItems: "top",
    justifyContent: "center",
  };

  return (
    <div style={{ height: 750 }}>
      <SplitPane split="vertical" sizes={sizes} onChange={setSizes}>
        <Pane minSize={300} maxSize="19%" style={{ background: "#573232" }}>
          <div style={{ ...layoutCSS, height: "100%", color: "white" }}>
            <ul>
              <br />
              <br />
              <p
                style={{
                  fontSize: "20px",
                  color: "white",
                }}
              >
                Hi Samuel,
              </p>
              <div style={{ fontSize: "20px", color: "black" }}>
                <FaHome />
                <Link to="/">
                  <button
                    style={{ marginLeft: "10px" }}
                    type="button"
                    class="btn btn-light"
                  >
                    Home
                  </button>
                </Link>
              </div>
              <br />
              <div
                style={{
                  fontSize: "20px",
                  display: "inline-block",
                  color: "black",
                }}
              >
                <MdSavings />

                <button
                  style={{ marginLeft: "10px" }}
                  type="button"
                  class="btn btn-light"
                >
                  Clothes
                </button>
              </div>
              <br /> <br />
              <div
                style={{
                  fontSize: "20px",
                  color: "black",
                }}
              >
                <FiTarget />
                <button
                  style={{ marginLeft: "10px" }}
                  type="button"
                  class="btn btn-light"
                >
                  Art
                </button>
              </div>
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
              <br />
              <div
                style={{
                  fontSize: "20px",
                  color: "black",
                }}
              >
                <AiOutlineLogout />
                <button
                  style={{ marginLeft: "10px" }}
                  type="button"
                  class="btn btn-dark"
                >
                  Logout
                </button>
              </div>
            </ul>
          </div>
        </Pane>

        <div
          style={{
            ...layoutCSS,
            background: "white",
            display: "flex",
          }}
        >
          <br />
          <Card />
        </div>
      </SplitPane>
    </div>
  );
}
