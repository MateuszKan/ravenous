function run(productUUIDs) {
  // URL do pobrania danych JSON
  const url =
    "https://s3.eu-west-1.amazonaws.com/hackajob-assets1.p.hackajob/challenges/sainsbury_products/products.json";

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parsowanie danych JSON
    })
    .then((data) => {
      // Tworzenie mapy produktów dla szybkiego dostępu po UID
      const productMap = new Map();
      data.forEach((product) => {
        productMap.set(product.product_uid, {
          price: product.retail_price.price,
        });
      });

      // Tworzenie mapy do zliczania ilości i obliczania sumy częściowej
      const summary = new Map();
      productUUIDs.forEach((uid) => {
        if (productMap.has(uid)) {
          if (!summary.has(uid)) {
            summary.set(uid, { quantity: 0, subtotal: 0 });
          }
          const product = summary.get(uid);
          product.quantity += 1;
          product.subtotal += productMap.get(uid).price;
        }
      });

      // Przygotowanie wyniku
      const lines = Array.from(summary, ([uid, { quantity, subtotal }]) => ({
        uid,
        quantity,
        subtotal,
      }));

      const total_item_count = lines.reduce(
        (sum, line) => sum + line.quantity,
        0
      );
      const total = lines.reduce((sum, line) => sum + line.subtotal, 0);

      // Tworzenie wyniku JSON
      const result = {
        lines,
        total_item_count,
        total,
      };

      return JSON.stringify(result);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
      return JSON.stringify({
        lines: [],
        total_item_count: 0,
        total: 0,
      });
    });
}
