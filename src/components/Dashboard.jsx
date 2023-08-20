import { useState } from "react";
import { productsList, updateProductsList } from "../data"; // Import your data source

const ProductDashboard = () => {
  const [editingProductId, setEditingProductId] = useState(null);
  const [changedRow, setChangedRow] = useState(null);

  const handleEditClick = (productId) => {
    setEditingProductId(productId);
    setChangedRow(productsList.find((p) => p.id === productId));
  };

  const handleCancelClick = () => {
    setEditingProductId(null);
    setChangedRow(null);
  };

  const handleSaveClick = () => {
    const updatedProduct = productsList.map((prod) =>
      prod.id === editingProductId ? changedRow : prod
    );
    updateProductsList(updatedProduct);
    setEditingProductId(null);
    setChangedRow(null);
  };

  const handleDeleteClick = () => {
    const updatedProduct = productsList.filter(
      (prod) => prod.id !== editingProductId
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
        <h1 className="text-2xl font-semibold mb-4">Product Dashboard</h1>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price (₹)</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">In Stock</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productsList.map((prod) => (
              <tr
                key={prod.id}
                className={
                  editingProductId && editingProductId !== prod.id
                    ? "opacity-30"
                    : ""
                }
              >
                <td className="border px-4 py-2 text-center">{prod.id}</td>
                <td className="border px-4 py-2">
                  {editingProductId === prod.id ? (
                    <input
                      type="text"
                      className="underline"
                      value={changedRow.name}
                      onChange={(e) => {
                        handleFieldChange(e.target.value, "name");
                      }}
                    />
                  ) : (
                    prod.name
                  )}
                </td>
                <td className="border px-4 py-2 text-center">
                  {editingProductId === prod.id ? (
                    <input
                      type="number"
                      className="text-center underline"
                      value={changedRow.price}
                      onChange={(e) => {
                        handleFieldChange(e.target.value, "price");
                      }}
                    />
                  ) : (
                    `₹ ${prod.price}`
                  )}
                </td>
                <td className="border px-4 py-2 text-center">
                  {editingProductId === prod.id ? (
                    <input
                      type="number"
                      className="text-center underline"
                      value={changedRow.rating}
                      onChange={(e) => {
                        handleFieldChange(e.target.value, "rating");
                      }}
                    />
                  ) : (
                    prod.rating
                  )}
                </td>
                <td className="border px-4 py-2 text-center font-semibold">
                  {editingProductId === prod.id ? (
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
                  ) : prod.inStock ? (
                    <span className="text-green-500">Yes</span>
                  ) : (
                    <span className="text-red-500">No</span>
                  )}
                </td>
                <td className="border p-2 text-center ">
                  {editingProductId === prod.id ? (
                    <>
                      <button
                        className="text-white bg-blue-500 py-1 px-2 rounded-md"
                        onClick={handleSaveClick}
                      >
                        Save
                      </button>{" "}
                      <button
                        className="text-white bg-gray-500 py-1 px-2 rounded-md"
                        onClick={handleCancelClick}
                      >
                        Cancel
                      </button>{" "}
                      <button
                        className="text-white bg-red-500 py-1 px-2 rounded-md"
                        onClick={handleDeleteClick}
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="text-white bg-blue-500 py-1 px-2 rounded-md"
                        onClick={() => handleEditClick(prod.id)}
                      >
                        Edit
                      </button>{" "}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ProductDashboard;
