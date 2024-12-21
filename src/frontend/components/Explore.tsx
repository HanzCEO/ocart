import { useState } from "react";

const Explore = () => {
  const [stars] = useState(
    Array.from({ length: 50 }, () => ({
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      size: Math.random() * 2 + 1,
    }))
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white opacity-50"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: star.y,
              left: star.x,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
        <h1 className="text-5xl font-bold mb-4">Explore the Cosmos of Art</h1>
        <p className="text-lg mb-8 max-w-2xl">
          Dive into the world of digital art, connect with artists, and protect
          your creative rights in the AI age.
        </p>

        <div className="flex space-x-4 mb-12">
          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:opacity-80 transition">
            Discover More
          </button>
          <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
            Start Exploring
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
          <div className="bg-white text-black rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
            <h2 className="text-xl font-bold mb-2">Discover Artists</h2>
            <p className="text-sm mb-4">
              Browse through a collection of digital artworks and meet creators
              worldwide.
            </p>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition">
              Explore
            </button>
          </div>
          <div className="bg-white text-black rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
            <h2 className="text-xl font-bold mb-2">AI Protection Tools</h2>
            <p className="text-sm mb-4">
              Use tools to scan and protect your artwork from being scraped by
              AI models.
            </p>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition">
              Learn More
            </button>
          </div>
          <div className="bg-white text-black rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
            <h2 className="text-xl font-bold mb-2">Artistic Trends</h2>
            <p className="text-sm mb-4">
              Stay updated with the latest movements and trends in digital art.
            </p>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
