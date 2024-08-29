import React, { useState } from "react";
import "./App.css";
import Business from "./Business";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import fetchBusinesses from "./fetchBusinesses.js";

const App = () => {
  const [businesses, setBusinesses] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = (location,term,sortBy) => {
    fetchBusinesses(location,term,sortBy)
      .then((data) => {
        setBusinesses(data.businesses);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching businesses:", err);
        setError("Failed to fetch businesses. Please try again later.");
      });
  };

  return (
    <div>
      <Navbar />
      <SearchBar onInputSubmit={handleSearch} />
      {error && <p className="error-message">{error}</p>}
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
