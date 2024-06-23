import React from "react";

const SearchBar = () => {
  return (
    <div className="container-lg py-20 bg-slate-700">
      <div role="tablist" className=" w-1/2 m-auto tabs tabs-bordered mb-5">
        <a role="tab" className="tab">
          Tab 1
        </a>
        <a role="tab" className="tab tab-active">
          Tab 2
        </a>
        <a role="tab" className="tab">
          Tab 3
        </a>
      </div>
      <div className="mb-5 flex mx-5 items-center justify-center">
        {" "}
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <div className="flex items-center justify-center">
        <button className="btn btn-xs sm:btn-sm  md:btn-md lg:btn-lg">
          Responsive
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
