import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import getUserInfo from "../../utilities/decodeJwt";

const url = `${process.env.REACT_APP_BACKEND_SERVER_URI}/user/login`;

const Login = () => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  useEffect(() => {
    setUser(getUserInfo());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("accessToken", res.accessToken);
      navigate("/home");
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  if (user) {
    navigate("/home");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100 flex items-center justify-center px-4">
      <div className="bg-white/70 backdrop-blur-sm border border-teal-200 rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-teal-900 mb-6 text-center">Welcome back</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-teal-700 mb-1">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-teal-300 bg-white/80 text-teal-900 placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-teal-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-teal-300 bg-white/80 text-teal-900 placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-teal-600 hover:bg-teal-500 active:bg-teal-700 text-white font-semibold transition-colors shadow-sm"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-teal-600 mt-5">
          Don't have an account?{" "}
          <Link to="/signup" className="font-semibold text-teal-700 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
