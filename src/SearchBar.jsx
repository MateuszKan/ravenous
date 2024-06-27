import React from "react";

const SearchBar = () => {
  return (
    <div className="container-lg py-20 bg-cover bg-center bg-custom-image">
      <div className="content-center 2xl:mx-96 xl:mx-44 mx-6 xs:mx-2 ">
        <div
          role="tablist"
          className="tabs xs:tabs-xs mb-10 2xl:mb-20 xl:mb-14 tabs-lg tabs-bordered"
        >
          <a role="tab" className="text-white tab">
            Best Match
          </a>
          <a role="tab" className="tab text-white font-medium tab-active">
            Highest Rated
          </a>
          <a role="tab" className="text-white font-medium tab">
            Most Reviewed
          </a>
        </div>
        <div className="gap-8 flex justify-center">
          <input
            type="text"
            placeholder="Search Businesses"
            className="input xs:input-md input-lg rounded-none input-bordered w-full  placeholder-slate-50 text-white bg-stone-400"
          />
          <input
            type="text"
            placeholder="Where?"
            className="input xs:input-md input-lg rounded-none input-bordered w-full placeholder-slate-50 text-white bg-stone-400"
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="btn rounded-none bg-stone-700 btn-lg text-white font-bold xs:btn-md mt-16 mb-20">
            Let’s Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
