const Explore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
      <div className="container mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Explore Art</h1>
          <p className="mt-4 text-lg">
            Discover and safeguard your digital creations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white text-black rounded-xl shadow-lg p-6 transition-transform hover:scale-105">
            <h2 className="text-xl font-bold mb-2">Explore Artists</h2>
            <p className="text-sm mb-4">
              Connect with leading artists and explore their digital galleries.
            </p>
            <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
              Learn More
            </button>
          </div>

          <div className="bg-white text-black rounded-xl shadow-lg p-6 transition-transform hover:scale-105">
            <h2 className="text-xl font-bold mb-2">AI Protection</h2>
            <p className="text-sm mb-4">
              Learn how to protect your artwork from AI scraping.
            </p>
            <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
              Get Started
            </button>
          </div>

          <div className="bg-white text-black rounded-xl shadow-lg p-6 transition-transform hover:scale-105">
            <h2 className="text-xl font-bold mb-2">Digital Art Trends</h2>
            <p className="text-sm mb-4">
              Stay updated with the latest trends in digital art.
            </p>
            <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
              Discover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
