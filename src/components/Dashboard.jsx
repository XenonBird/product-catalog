import { garmentCatalog } from "../data";

const Dashboard = () => {
  return (
    <main className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Garment Dashboard</h1>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price (₹)</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">In Stock</th>
              <th className="px-4 py-2">Edit</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {garmentCatalog.map((garment) => (
              <tr key={garment.id}>
                <td className="border px-4 py-2 text-center">{garment.id}</td>
                <td className="border px-4 py-2">{garment.name}</td>
                <td className="border px-4 py-2 text-center">
                  {garment.price}
                </td>
                <td className="border px-4 py-2 text-center">
                  {garment.rating}
                </td>
                <td className="border px-4 py-2 text-center font-semibold">
                  {garment.inStock ? (
                    <span className="text-green-500">Yes</span>
                  ) : (
                    <span className="text-red-500">No</span>
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

export default Dashboard;
