const fetchBusinesses = (location, term, sortBy) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer VT9Zag0ICSrQc9brSAITfp3no1W6ru9g_TWiei8MMKVOGlqHH3l9Kibv4nJoxTit5GVU_S-5hqRpyqIjcg2fEb4i8vT40aCndYeX016xKDHjzWMu_uUbVbDMi-cYXnYx",
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
