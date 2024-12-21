import { Routes, Route, Link } from "react-router-dom";
import Explore from "./components/Explore";

const App = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="p-4 bg-gray-200">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/explore">
          Explore
        </Link>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
};

const Home = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Home Page</h1>
    <p>Welcome to the Home Page!</p>
  </div>
);

export default App;
