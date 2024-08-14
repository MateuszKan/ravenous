function fetchBusinesses(location) {
  const token =
    "WSYzIrjNKGp31AYu_H7MMwt7v19JqN1svvDXKqhJn5yjmHiYu2f6toajxiJa9RLcyb4beYE59L7-AHqoH3MyjtM3jqSR8gd8oqeZtK-ewYvwDYAXZqrx4-1v9uiOZnYx";
  const url = `https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=6&location=${encodeURIComponent(
    location
  )}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data; // Returning the JSON data
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      throw error; // Re-throwing the error for further handling if necessary
    });
}

export default fetchBusinesses;
