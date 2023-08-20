import { productsList } from "../data";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <main>
      <div className="max-w-6xl mx-auto">
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
  const { id, name, imageUrl, description, rating, price, inStock } = product;

  return (
    <Link
      to={`/product-view/${id}`}
      className="bg-gray-50 block rounded-lg shadow-md overflow-hidden"
    >
      <div className="w-full aspect-[3/2] bg-gray-300">
        {/* It's commented out because development phase */}
        {/* <img src={imageUrl} alt={name} className="w-full h-full object-cover" /> */}
        {console.log(id, "=>", imageUrl)}
      </div>
      <div className="p-4 mt-auto">
        <h2 className="text-xl font-semibold">
          {name.replace(/\b\w/g, (l) => l.toUpperCase())}
        </h2>
        <p className="text-right font-semibold text-lg">{rating} ⭐</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between font-semibold">
          {inStock}
          {inStock ? (
            <p className="inline ml-auto line-through text-red-500 px-4 py-2 rounded-md">
              {inStock ? `₹ ${Math.round((Math.random() + 1) * price)}` : ""}
            </p>
          ) : (
            <p className="inline ml-auto text-red-500 px-4 py-2 rounded-md">
              Out of Stock
            </p>
          )}

          <p className="bg-green-500 text-white px-4 py-2 rounded-md">
            ₹ {price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Products;
