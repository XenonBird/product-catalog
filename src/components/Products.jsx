import { productsList } from "../data";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <main>
      <div className="max-w-6xl mx-auto">
        <ProductSearch />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {productsList.length === 0 ? (
            <p className="text-4xl text-center py-10">Loading...</p>
          ) : (
            productsList.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

const ProductItem = ({ product }) => {
  const { id, name, imageUrl, description, rating, price, discount, inStock } =
    product;

  return (
    <Link
      to={`/product-view/${id}`}
      className="bg-gray-100 block rounded-lg shadow-lg overflow-hidden"
    >
      <div className="w-full aspect-[3/2] bg-gray-300">
        {/* It's commented out because development phase */}
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        {/* <p className="p-4">{name + " => " + imageUrl}</p> */}
      </div>
      <div className="p-4 mt-auto">
        <h2 className="text-xl font-semibold">
          {name.replace(/\b\w/g, (l) => l.toUpperCase())}
        </h2>
        <p className="text-right font-semibold text-lg">{rating} ⭐</p>
        <p className="text-gray-700 mb-4">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <div className="flex justify-between font-semibold">
          <p className="inline ml-auto text-red-500 px-4 py-2 rounded-md">
            {inStock ? discount + "% off" : "Out of Stock"}
          </p>

          <p className="bg-green-500 text-white px-4 py-2 rounded-md">
            ₹ {price}
          </p>
        </div>
      </div>
    </Link>
  );
};

const ProductSearch = () => {
  return (
    <div className="p-6 mx-auto pb-0 text-right">
      <button className="bg-gray-300 py-2 px-3 rounded">Filter</button>
    </div>
  );
};

export default Products;
