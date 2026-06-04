import React from 'react';

const Landingpage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100 flex items-center justify-center px-4">
            <div className="bg-white/70 backdrop-blur-sm border border-teal-200 rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-teal-100 border-2 border-teal-300 flex items-center justify-center">
                    <span className="text-3xl">🌊</span>
                </div>
                <h1 className="text-2xl font-bold text-teal-900 mb-1">Professor Brockenbrough's User Skeleton App</h1>
                <p className="text-teal-800 text-sm mb-1">A starting point for an application.</p>
                <p className="text-teal-700 text-sm mb-8">If you see this with a blue background and white text, Tailwind is working!</p>
                <div className="flex gap-3 justify-center">
                    <a
                        href="/signup"
                        className="px-6 py-2 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-semibold transition-colors shadow-sm"
                    >
                        Sign Up
                    </a>
                    <a
                        href="/login"
                        className="px-6 py-2 rounded-xl border border-teal-400 text-teal-700 hover:bg-teal-50 font-semibold transition-colors"
                    >
                        Log In
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Landingpage;
