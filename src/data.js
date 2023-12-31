import { randomId, randomImageUrl, randomNumber } from "./utils";

function generateRandomProduct() {
  const colors = [
    "black",
    "white",
    "blue",
    "red",
    "green",
    "yellow",
    "pink",
    "purple",
    "orange",
    "gray",
  ];
  const sizes = ["s", "m", "l", "xl", "xxl"];
  const materials = ["cotton", "polyester", "denim", "linen", "silk"];
  const types = [
    "kids",
    "women",
    "sharee",
    "swimsuit",
    "t-shirt",
    "dress",
    "shorts",
    "hoodie",
    "jacket",
    "leggings",
    "shirt",
    "skirt",
  ];

  const randomType = types[Math.floor(Math.random() * types.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  const randomMaterial =
    materials[Math.floor(Math.random() * materials.length)];

  return {
    id: randomId(),
    name: `${randomColor}  ${randomMaterial} ${randomType} `,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum voluptas officiis, provident rerum laboriosam consectetur quisquam fugiat, quis ipsam quidem cupiditate veritatis magnam ipsa dicta explicabo? Deleniti veniam nam natus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste voluptatem tenetur alias itaque nesciunt, perspiciatis corrupti libero explicabo aliquam neque qui! Ad eveniet obcaecati quisquam, fuga impedit ducimus ut voluptatum.",
    price: randomNumber(2000, 200).toFixed(2),
    discount: randomNumber(100),
    imageUrl: randomImageUrl(),
    category: "clothing",
    rating: Math.round(Math.random() * 10) / 2,
    inStock: Math.random() < 0.8, // 80% chance of being in stock
    specifications: {
      color: randomColor,
      size: randomSize,
      material: randomMaterial,
    },
    tags: ["fashion", randomType],
  };
}

var productsList = [];
for (let i = 1; i <= 5; i++) {
  productsList.push(generateRandomProduct(i));
}

const updateProductsList = (updatedList) => {
  productsList = updatedList;
};

export { productsList, updateProductsList };
