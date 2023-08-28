import React, { Component } from "react";
import BB from "./BB.jpeg";

export default class Cards extends Component {
  render() {
    return (
      <div>
        <article class="card">
          <div class="temporary_text">
            <img src={BB} />
          </div>
          <div class="card_content">
            <span class="card_title">This is a Title</span>
            <span class="card_subtitle">
              Thsi is a subtitle of this page. Let us see how it looks on the
              Web.
            </span>
            <p class="card_description">
              Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
              dolor tempora aperiam itaque possimus at, cupiditate earum, quae
              repudiandae aspernatur? Labore minus soluta consequatur placeat.
            </p>
          </div>
        </article>
      </div>
    );
  }
}
