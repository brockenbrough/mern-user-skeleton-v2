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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100">
            <p className="text-teal-800 text-lg">Log in to view this page.</p>
        </div>
    );

    const { id, email, username } = user;

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100 flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-teal-200 shadow-md p-8 space-y-5">
                    <h1 className="text-2xl font-bold text-teal-900">
                        Welcome back, <span className="text-teal-700">{username}</span>
                    </h1>

                    <div className="border-t border-teal-100 pt-5 space-y-4">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-teal-700 mb-1">Username</p>
                            <p className="text-teal-900 font-medium">{username}</p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-teal-700 mb-1">Email</p>
                            <p className="text-teal-900 font-medium break-all">{email}</p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-teal-700 mb-1">User ID</p>
                            <p className="text-teal-900 font-mono text-sm break-all">{id}</p>
                        </div>
                    </div>

                    <button
                        onClick={handleClick}
                        className="w-full pt-2 py-3 rounded-xl bg-teal-700 hover:bg-teal-600 active:bg-teal-800 text-white font-semibold transition-colors shadow-sm"
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;