import React, { useState, useEffect, useRef } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const libraries = ['places'];

const SearchBar = ({ onInputSubmit }) => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBPAxggTIE0IM7HBfd6qayxEzwCLcn5Db4",
    libraries
  });

  const autocompleteRef = useRef(null);

  useEffect(() => {
    if (isLoaded && autocompleteRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(autocompleteRef.current, {
        types: ["geocode"],
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place && place.formatted_address) {
          setLocation(place.formatted_address);
        }
      });
    }
  }, [isLoaded]);

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };

  const handleSubmit = () => {
    onInputSubmit(location, term, sortBy);
    setTerm("");
    setLocation("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="container-lg py-20 bg-cover bg-center bg-custom-image">
      <div className="content-center 2xl:mx-96 xl:mx-44 mx-6 xs:mx-2">
        <div
          role="tablist"
          className="tabs xs:tabs-xs mb-10 2xl:mb-20 xl:mb-14 tabs-lg tabs-bordered"
        >
          <a
            href="#best_match"
            role="tab"
            className={`tab text-white ${
              sortBy === "best_match" ? "tab-active" : "font-medium"
            }`}
            onClick={() => handleSortChange("best_match")}
          >
            Best Match
          </a>
          <a
            href="#rating"
            role="tab"
            className={`tab text-white ${
              sortBy === "rating" ? "tab-active" : "font-medium"
            }`}
            onClick={() => handleSortChange("rating")}
          >
            Highest Rated
          </a>
          <a
            href="#review_count"
            role="tab"
            className={`tab text-white ${
              sortBy === "review_count" ? "tab-active" : "font-medium"
            }`}
            onClick={() => handleSortChange("review_count")}
          >
            Most Reviewed
          </a>
        </div>
        <div className="gap-8 flex justify-center">
          <input
            type="text"
            placeholder="Search Businesses"
            className="input xs:input-md input-lg rounded-none input-bordered w-full placeholder-slate-50 text-white bg-stone-400"
            value={term}
            onChange={handleTermChange}
          />
          <input
            type="text"
            placeholder="Where?"
            className="input xs:input-md input-lg rounded-none input-bordered w-full placeholder-slate-50 text-white bg-stone-400"
            value={location}
            onChange={handleLocationChange}
            onKeyDown={handleKeyPress}
            ref={autocompleteRef}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="btn rounded-none bg-stone-700 btn-lg text-white font-bold xs:btn-md mt-16 mb-20"
            onClick={handleSubmit}
          >
            Let’s Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
