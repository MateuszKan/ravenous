import React from "react";

const appStyle = {
  fontFamily: "Cinzel, serif",
};

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <a className="btn btn-ghost text-xl" style={appStyle}>
        Ravenous
      </a>
    </div>
  );
};

export default Navbar;
