import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";

export default function HeaderSocial() {
  return (
    <div className="header_socials">
      <a href="https://www.facebook.com/trong.tin.3532/" target="_blank">
        <BsFacebook />
      </a>
      <a href="https://github.com/TrongTin239" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
}
