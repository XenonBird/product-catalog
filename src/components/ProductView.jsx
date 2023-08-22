import { useParams } from "react-router-dom";
import { productsList } from "../data";
import NotFound from "./NotFound";
import { useState } from "react";

const ProductView = () => {
  var { productId } = useParams();
  productId = parseInt(productId);
  const product = productsList.find((item) => item.id === productId);

  return (
    <main className="w-full">
      {product ? (
        <section className="max-w-6xl mx-auto p-6 grid sm:grid-cols-2 gap-6">
          <div>
            <div className="mb-4 aspect-[3/2] bg-gray-300 rounded overflow-hidden">
              {/* It's commented out because development phase */}
              <img src={product.imageUrl} alt={name} className="w-full h-full object-cover" />
              {/* <p className="p-4">{product.name + " => " + product.imageUrl}</p> */}
            </div>
            <div className="flex justify-end text-lg font-semibold">
              <p className="inline ml-auto text-red-500 px-4 py-2 rounded-md">
                {product.inStock ? product.discount + "% off" : "Out of Stock"}
              </p>
              <p className="bg-green-500 text-white px-4 py-2 rounded-md">
                Buy ₹{product.price}
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-4xl mb-4">
              {product.name.replace(/\b\w/g, (l) => l.toUpperCase())}
            </h1>
            <p className="mb-4 indent-4">{product.description}</p>
            <p className="mb-4">
              {product.tags.map((tag, i) => (
                <span key={i} className="p-1 px-3 bg-gray-300 mr-2 rounded-xl">
                  {tag}
                </span>
              ))}
            </p>
            <table className="w-full max-w-md">
              <thead>
                <th className="border p-2" colSpan={2}>
                  Specifications
                </th>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 text-center">Color</td>
                  <td className="border p-2 text-center">
                    {product.specifications.color}
                  </td>
                </tr>
                <tr>
                  <td className="border p-2 text-center">Size</td>
                  <td className="border p-2 text-center">
                    {product.specifications.size}
                  </td>
                </tr>
                <tr>
                  <td className="border p-2 text-center">Material</td>
                  <td className="border p-2 text-center">
                    {product.specifications.material}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <p className="font-semibold text-xl font-semibold mb-4">Overall rating : {product.rating} ⭐</p>
            <div className="flex flex-col gap-3">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
          </div>
        </section>
      ) : (
        <NotFound />
      )}
    </main>
  );
};

const ReviewCard = () => {
  const [isExpand, setIsExpand] = useState(false);

  const handleReviewExpand = () => {
    setIsExpand(!isExpand);
  };

  const reviewComment = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
  corrupti reprehenderit enim. Perspiciatis, minus ullam quaerat porro
  velit ducimus non amet officia nobis, magni illo dolore magnam et, rerum
  vel.`;

  return (
    <div className="p-4 bg-gray-200 shadow-md rounded-md flex flex-col">
      <div className="pb-2 flex gap-4 items-center border-b border-b-white">
        <h3 className="flex-grow text-xl">Anthony Edward Stark</h3>
        <p className="font-semibold text-lg">3.5 ⭐</p>
      </div>
      <p className="mt-2 indent-4">
        {reviewComment.length > 100 ? (
          isExpand ? (
            <>
              <span>{reviewComment}</span>
              <span
                className="cursor-pointer text-blue-500"
                onClick={handleReviewExpand}
              >
                ...less
              </span>
            </>
          ) : (
            <>
              <span>{reviewComment.slice(0, 100)}</span>
              <span
                className="cursor-pointer text-blue-500"
                onClick={handleReviewExpand}
              >
                ...more
              </span>
            </>
          )
        ) : (
          reviewComment
        )}
      </p>
    </div>
  );
};

export default ProductView;
