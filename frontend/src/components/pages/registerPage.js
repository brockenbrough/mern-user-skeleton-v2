import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const url = `${process.env.REACT_APP_BACKEND_SERVER_URI}/user/signup`;

const Register = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url, data);
      window.alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100 flex items-center justify-center px-4">
      <div className="bg-white/70 backdrop-blur-sm border border-teal-200 rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-teal-900 mb-6 text-center">Create an account</h2>

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
            <label className="block text-sm font-semibold text-teal-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
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
            Register
          </button>
        </form>

        <p className="text-center text-sm text-teal-600 mt-5">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-teal-700 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
