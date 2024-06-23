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
      <div className="mx-20">
        <div className="grid  sm:lg:grid-rows-1 lg:grid-rows-2 py-20 lg:grid-flow-col place-content-center gap-20">
          <Business />
          <Business />
          <Business />
          <Business />
          <Business />
          <Business />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
