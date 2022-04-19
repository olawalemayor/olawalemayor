import React, { Fragment } from "react";

interface NavBarProps {
  brand: string;
  action: any;
}

export default function Mobilenavbar({ brand, action }: NavBarProps) {
  return (
    <Fragment>
      <div className="mobile-navbar">
        <h2 className="brand">{brand}</h2>
        <div>
          <button className="navbar-btn" onClick={() => action()}>
            ☰
          </button>
        </div>
      </div>
    </Fragment>
  );
}
