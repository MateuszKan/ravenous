import React from "react";
import "./App.css";
import Business from "./Business";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />

      <div className="grid grid-flow-col xs:grid-flow-row grid-rows-3 xs:grid-rows-1 md:grid-rows-3 lg:grid-rows-2 gap-8 xs:gap-8 md:gap-6 xl:gap-10 2xl:gap-24 justify-center my-9">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>

      <Footer />
    </div>
  );
}

export default App;
