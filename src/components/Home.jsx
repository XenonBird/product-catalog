const Home = () => {
  return (
    <main className="bg-gray-800 text-white">
      <div className=" min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold mb-4">Welcome to FashionHub</h1>
        <p className="text-lg mb-8">
          Your ultimate fashion destination for style and trends.
        </p>
        <a
          href="/products"
          className="bg-green-500 font-semibold text-gray-800 px-6 py-3 rounded-md hover:scale-[1.03] transition duration-300 ease-in-out"
        >
          Explore Our Products
        </a>
        <p className="mt-4 text-sm">
          Limited Time Offer! Get 20% off on your first purchase.
        </p>
      </div>
    </main>
  );
};

export default Home;
