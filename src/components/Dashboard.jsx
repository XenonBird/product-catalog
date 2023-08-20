import { useState } from "react";
import { productsList, updateProductsList } from "../data"; // Import your data source
import { randomId, randomImageUrl } from "../utils";

const ProductDashboard = () => {
  const [editingProductId, setEditingProductId] = useState(null);
  const [changedRow, setChangedRow] = useState(null);

  const handleEditClick = (productId) => {
    setEditingProductId(productId);
    setChangedRow(
      productId === "new"
        ? {
            id: randomId(),
            name: "",
            description: "This is the description of this product",
            price: 0,
            imageUrl: randomImageUrl(),
            category: "clothing",
            rating: 0,
            inStock: true,
          }
        : productsList.find((p) => p.id === productId)
    );
  };

  const handleCancelClick = () => {
    setEditingProductId(null);
    setChangedRow(null);
  };

  const handleSaveClick = () => {
    const updatedProduct =
      editingProductId === "new"
        ? [...productsList, changedRow]
        : productsList.map((product) =>
            product.id === editingProductId ? changedRow : product
          );
    updateProductsList(updatedProduct);
    setEditingProductId(null);
    setChangedRow(null);
  };

  const handleDeleteClick = () => {
    const updatedProduct = productsList.filter(
      (product) => product.id !== editingProductId
    );
    updateProductsList(updatedProduct);
    setEditingProductId(null);
    setChangedRow(null);
  };

  const handleFieldChange = (value, field) => {
    setChangedRow({ ...changedRow, [field]: value });
  };

  return (
    <main className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl underline underline-offset-8 font-semibold mb-4">
          All products
        </h1>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price (₹)</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">In Stock</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productsList.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                editingProductId={editingProductId}
                changedRow={changedRow}
                handleFieldChange={handleFieldChange}
                setChangedRow={setChangedRow}
                handleSaveClick={handleSaveClick}
                handleCancelClick={handleCancelClick}
                handleDeleteClick={handleDeleteClick}
                handleEditClick={handleEditClick}
              />
            ))}
          </tbody>
          <tfoot>
            <NewProductRow
              editingProductId={editingProductId}
              changedRow={changedRow}
              handleFieldChange={handleFieldChange}
              setChangedRow={setChangedRow}
              handleSaveClick={handleSaveClick}
              handleCancelClick={handleCancelClick}
              handleEditClick={handleEditClick}
            />
          </tfoot>
        </table>
      </div>
    </main>
  );
};

const ProductRow = ({
  product,
  editingProductId,
  changedRow,
  handleFieldChange,
  setChangedRow,
  handleSaveClick,
  handleCancelClick,
  handleDeleteClick,
  handleEditClick,
}) => {
  return (
    <tr
      key={product.id}
      className={
        editingProductId && editingProductId !== product.id ? "opacity-30" : ""
      }
    >
      <td className="border px-4 py-2 text-center">id_{product.id}</td>
      <td className="border px-4 py-2">
        {editingProductId === product.id ? (
          <input
            type="text"
            className="underline"
            value={changedRow.name}
            onChange={(e) => {
              handleFieldChange(e.target.value, "name");
            }}
          />
        ) : (
          product.name
        )}
      </td>
      <td className="border px-4 py-2 text-center">
        {editingProductId === product.id ? (
          <input
            type="number"
            className="text-center underline"
            value={changedRow.price}
            onChange={(e) => {
              handleFieldChange(e.target.value, "price");
            }}
          />
        ) : (
          `₹ ${product.price}`
        )}
      </td>
      <td className="border px-4 py-2 text-center">
        {editingProductId === product.id ? (
          <input
            type="number"
            className="text-center underline"
            value={changedRow.rating}
            onChange={(e) => {
              handleFieldChange(e.target.value, "rating");
            }}
          />
        ) : (
          product.rating
        )}
      </td>
      <td className="border px-4 py-2 text-center font-semibold">
        {editingProductId === product.id ? (
          changedRow.inStock ? (
            <button
              className="text-green-500 underline"
              onClick={() => {
                setChangedRow({ ...changedRow, inStock: false });
              }}
            >
              Yes
            </button>
          ) : (
            <button
              className="text-red-500 underline"
              onClick={() => {
                setChangedRow({ ...changedRow, inStock: true });
              }}
            >
              No
            </button>
          )
        ) : product.inStock ? (
          <span className="text-green-500">Yes</span>
        ) : (
          <span className="text-red-500">No</span>
        )}
      </td>
      <td className="border px-4 py-2 text-center">
        {editingProductId === product.id ? (
          <input
            type="url"
            className="text-center underline"
            value={changedRow.imageUrl}
            onChange={(e) => {
              handleFieldChange(e.target.value, "imageUrl");
            }}
          />
        ) : (
          <p>
            <a
              href={product.imageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              🖼
            </a>
          </p>
        )}
      </td>
      <td className="border p-2 text-center ">
        {editingProductId === product.id ? (
          <>
            <button
              className="text-white bg-blue-500 py-1 px-2 rounded-[0.25rem]"
              onClick={handleSaveClick}
            >
              Save
            </button>{" "}
            <button
              className="text-white bg-gray-500 py-1 px-2 rounded-[0.25rem]"
              onClick={handleCancelClick}
            >
              Cancel
            </button>{" "}
            <button
              className="text-white bg-red-500 py-1 px-2 rounded-[0.25rem]"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </>
        ) : (
          <>
            <button
              className="text-white bg-blue-500 py-1 px-2 rounded-[0.25rem]"
              onClick={() => handleEditClick(product.id)}
            >
              Manage
            </button>{" "}
          </>
        )}
      </td>
    </tr>
  );
};

const NewProductRow = ({
  editingProductId,
  changedRow,
  handleFieldChange,
  setChangedRow,
  handleSaveClick,
  handleCancelClick,
  handleEditClick,
}) => {
  return (
    <tr>
      {editingProductId === "new" ? (
        <>
          <td className="px-4 py-2"></td>
          <td className="border px-4 py-2">
            <input
              type="text"
              className="underline border-b border-b-black px-2"
              autoFocus
              value={changedRow.name}
              onChange={(e) => {
                handleFieldChange(e.target.value, "name");
              }}
            />
          </td>
          <td className="border px-4 py-2 text-center">
            <input
              type="number"
              className="text-center underline border-b border-b-black"
              value={changedRow.price}
              onChange={(e) => {
                handleFieldChange(e.target.value, "price");
              }}
            />
          </td>
          <td className="border px-4 py-2 text-center">
            <input
              type="number"
              className="text-center underline border-b border-b-black"
              value={changedRow.rating}
              onChange={(e) => {
                handleFieldChange(e.target.value, "rating");
              }}
            />
          </td>
          <td className="border px-4 py-2 text-center font-semibold">
            {changedRow.inStock ? (
              <button
                className="text-green-500 underline"
                onClick={() => {
                  setChangedRow({ ...changedRow, inStock: false });
                }}
              >
                Yes
              </button>
            ) : (
              <button
                className="text-red-500 underline"
                onClick={() => {
                  setChangedRow({ ...changedRow, inStock: true });
                }}
              >
                No
              </button>
            )}
          </td>
          <td className="border px-4 py-2 text-center">
            <input
              type="url"
              className="text-center underline border-b border-b-black"
              value={changedRow.imageUrl}
              onChange={(e) => {
                handleFieldChange(e.target.value, "imageUrl");
              }}
            />
          </td>
        </>
      ) : (
        <td className="px-4 py-2" colSpan={5}></td>
      )}
      <td className="p-2 text-center ">
        {editingProductId === "new" ? (
          <>
            <button
              className="text-white bg-blue-500 py-1 px-2 rounded-[0.25rem]"
              onClick={handleSaveClick}
            >
              Save
            </button>{" "}
            <button
              className="text-white bg-gray-500 py-1 px-2 rounded-[0.25rem]"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="text-white text-lg font-semibold bg-green-500 py-2 px-3 rounded-[0.25rem]"
              onClick={() => handleEditClick("new")}
            >
              Add new
            </button>{" "}
          </>
        )}
      </td>
    </tr>
  );
};

export default ProductDashboard;
