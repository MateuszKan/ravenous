import "./App.css";
import Business from "./Business";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import React, { useState } from "react";
import fetchBusinesses from "./fetchBusinesses";

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const handleSearch = (location) => {
    fetchBusinesses(location).then((data) => {
      setBusinesses(data.businesses);
    });
  };

  return (
    <div>
      <Navbar />
      <SearchBar onInputSubmit={handleSearch} />
      <div className="grid grid-flow-col xs:grid-flow-row grid-rows-3 xs:grid-rows-1 md:grid-rows-3 lg:grid-rows-2 gap-8 xs:gap-8 md:gap-6 xl:gap-10 2xl:gap-24 justify-center my-9">
        {businesses.map((business) => (
          <Business key={business.id} data={business} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
