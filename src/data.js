function generateRandomGarment(id) {
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
    id,
    name: `${randomColor}  ${randomMaterial} ${randomType} `,
    description: `This is the description of ${randomType} garment ${id}.`,
    price: parseFloat((Math.random() * 50 + 10) * 10).toFixed(2),
    imageUrl: `https://picsum.photos/id/${Math.round(
      Math.random() * 1000
    )}/75/50`,
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

const garmentCatalog = [];
for (let i = 1; i <= 10; i++) {
  garmentCatalog.push(generateRandomGarment("p-" + i));
}

export { garmentCatalog };
