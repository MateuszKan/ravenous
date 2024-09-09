const fetchBusinesses = (location, term, sortBy) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer REACT_APP_YELP_API_KEY",
    },
  };

  return fetch(
    `https://api.yelp.com/v3/businesses/search?location=${encodeURIComponent(
      location
    )}&term=${encodeURIComponent(term)}&sort_by=${sortBy}&limit=6`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

export default fetchBusinesses;
