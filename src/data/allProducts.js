let products = [
  {
    name: "gadget",
    thumb: "/img/products/prod-gadget.png",
    image: "/img/products/product-big-gadget.jpg"
  },
  {
    name: "travel",
    thumb: "/img/products/prod-travel.png",
    image: "/img/products/product-big-travel.jpg"
  },
  {
    name: "investasi",
    thumb: "/img/products/prod-investment.png",
    image: "/img/products/product-big-investment.jpg"
  },
];

export function getAllProducts() {
  return products;
}

export function getProductImage(name) {
  return products.find(
    (product) => product.name === name
  );
}
