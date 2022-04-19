import React from "react";
import Navbar from "./navbar";
import SocialLinks from "./socialLinks";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div>
        <Navbar />
        <SocialLinks />
      </div>
    </div>
  );
}
