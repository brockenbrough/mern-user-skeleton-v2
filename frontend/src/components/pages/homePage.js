import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getUserInfo from '../../utilities/decodeJwt';

const HomePage = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        localStorage.removeItem('accessToken');
        return navigate('/');
    };

    useEffect(() => {
        setUser(getUserInfo());
    }, []);

    if (!user) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950">
            <p className="text-gray-400 text-lg">Log in to view this page.</p>
        </div>
    );

    const { id, email, username } = user;

    return (
        <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-md space-y-4">
                <h1 className="text-3xl font-bold text-white text-center mb-8">
                    Welcome back, <span className="text-pink-500">{username}</span>
                </h1>

                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email</p>
                    <p className="text-white font-medium break-all">{email}</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">User ID</p>
                    <p className="text-white font-mono text-sm break-all">{id}</p>
                </div>

                <button
                    onClick={handleClick}
                    className="w-full mt-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-500 active:bg-pink-700 text-white font-semibold transition-colors"
                >
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default HomePage;