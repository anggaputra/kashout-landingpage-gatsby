let products = [
  {
    sku: "gadget",
    detail: {
      name: "gadget",
      thumb: "/img/products/prod-gadget.png",
      image: "/img/products/product-big-gadget.jpg",
      tagline:
        "Tentukan produk yang ingin dibeli. Deposit. Dapatkan cash rewards.",
    },
  },
  {
    sku: "travel",
    detail: {
      name: "travel",
      thumb: "/img/products/prod-travel.png",
      image: "/img/products/product-big-travel.jpg",
      tagline: "Jalan-jalan butuh perencanaan. Biar tidak buntung, Nabung dari sekarang.",
    },
  },
  {
    sku: "investment",
    detail: {
      name: "investasi",
      thumb: "/img/products/prod-investment.png",
      image: "/img/products/product-big-investment.jpg",
      tagline: "Investasi butuh komitmen. Otomatisasi proses menabungnya.",
    },
  },
];

export function getAllProducts() {
  return products;
}

export function getProductImage(name) {
  return products.find((product) => product.sku === name);
}
