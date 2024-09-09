import React from "react";

const appStyle = {
  fontFamily: "Cinzel, serif",
};

const Navbar = () => {
  return (
    <div className="navbar lg:px-5 justify-center bg-neutral-600">
      <a href="/" className="text-5xl text-white" style={appStyle}>
        Ravenous
      </a>
    </div>
  );
};

export default Navbar;
