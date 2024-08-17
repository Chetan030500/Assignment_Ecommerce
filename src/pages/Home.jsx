import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Check login status on component mount
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
      fetchProductData();
    }
  }, []);

  // Fetch product data
  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log("Error occurred");
      setPosts([]);
    }
    setLoading(false);
  }

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    // Simple check (in a real app, you'd validate with a backend)
    if (username && password) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      fetchProductData();
    } else {
      alert("Please enter a username and password.");
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setPosts([]);
  };

  if (!isLoggedIn) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <form onSubmit={handleLogin} className="p-4 bg-gray-100 shadow-md rounded">
          <h2 className="text-lg font-bold mb-4">Login</h2>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded m-4">
        Logout
      </button>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
