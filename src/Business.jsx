import React from "react";

const Business = ({ data }) => {
  return (
    <div className="card bg-white rounded-none w-72 h-80 object-fill border-4 border-white">
      <figure>
        <img className="w-100 h-100" src={data.image_url} alt="Restaurant" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black">{data.name}</h2>
        <p>
          {data.location.address1}, {data.location.city}, {data.location.state}{" "}
          {data.location.zip_code}
        </p>
        <div className="card-actions justify-end">
          <p>
            <span className="text-black font-bold">
              {data.categories[0].title}{" "}
            </span>
            <span className="text-amber-950 font-medium">
              {data.rating} stars
            </span>{" "}
            <span className="text-black font-light">
              {data.review_count} reviews
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Business;
