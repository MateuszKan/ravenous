import React from "react";
import Data from "./Data";

const Business = () => {
  return (
    <div className="card bg-white rounded-none w-72 h-80 object-fill border-4 border-white">
      <figure>
        <img src={Data.imageSrc} alt="Restaurant" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black">{Data.name}</h2>
        <p>
          {Data.address} {Data.city} {Data.state} {Data.zipCode}
        </p>
        <div className="card-actions justify-end">
          <p>
            <span className="text-black font-bold">{Data.category} </span>
            <span className="text-amber-950 font-medium">
              {Data.rating} stars
            </span>{" "}
            <span className="text-black font-light">
              {Data.reviewCount} reviews
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Business;
