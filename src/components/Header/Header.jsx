import React from "react";
import CTA from "./CTA";
import ME from "../../assets/image/me.png";
import "./header.css";
import HeaderSocial from "./HeaderSocial";
export default function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Tín Nguyễn</h1>
        <h5 className="text-light"> Front-end Developer </h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
