import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getUserInfo from "../../utilities/decodeJwt";

const PrivateUserProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    setUser(getUserInfo());
  }, []);

  if (!user) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100">
      <p className="text-teal-800 text-lg">Log in to view this page.</p>
    </div>
  );

  const initials = user.username
    ? user.username.slice(0, 2).toUpperCase()
    : "?";

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm text-center space-y-6">

        {/* Avatar */}
        <div className="mx-auto w-24 h-24 rounded-full bg-teal-700 border-4 border-teal-200 flex items-center justify-center text-white text-3xl font-bold shadow-md">
          {initials}
        </div>

        {/* Username + email */}
        <div>
          <h1 className="text-2xl font-bold text-teal-900">{user.username}</h1>
          <p className="text-teal-700 text-sm mt-1">{user.email}</p>
        </div>

        {/* Info card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-teal-200 shadow-sm text-left space-y-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-teal-700">Username</p>
            <p className="text-teal-900 font-medium">{user.username}</p>
          </div>
          <div className="border-t border-teal-100 pt-3">
            <p className="text-xs uppercase tracking-widest text-teal-700">Email</p>
            <p className="text-teal-900 font-medium break-all">{user.email}</p>
          </div>
          <div className="border-t border-teal-100 pt-3">
            <p className="text-xs uppercase tracking-widest text-teal-700">User ID</p>
            <p className="text-teal-900 font-mono text-sm break-all">{user.id}</p>
          </div>
        </div>

        {/* Log out button */}
        <button
          onClick={() => setShowModal(true)}
          className="w-full py-3 rounded-xl bg-teal-700 hover:bg-teal-600 active:bg-teal-700 text-white font-semibold transition-colors shadow-sm"
        >
          Log Out
        </button>
      </div>

      {/* Confirm modal */}
      {showModal && (
        <div className="fixed inset-0 bg-teal-900/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white/90 rounded-2xl p-6 w-full max-w-sm border border-teal-200 shadow-xl">
            <h2 className="text-teal-900 text-lg font-bold mb-2">Log Out</h2>
            <p className="text-teal-800 mb-6">Are you sure you want to log out?</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2 rounded-xl border border-teal-300 text-teal-700 hover:bg-teal-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 py-2 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-semibold transition-colors"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivateUserProfile;
