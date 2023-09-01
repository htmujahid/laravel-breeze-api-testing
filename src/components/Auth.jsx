"use client";
import { useAuth } from "@/hooks/auth";
import React, { useEffect, useState } from "react";

function Auth() {
    const { user, login, logout } = useAuth({ middleware: "guest" });
    const [errors, setErrors] = useState([]);
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [auth, setAuth] = useState(user ? true : false);

    useEffect(() => {
        setAuth(user ? true : false);
    }, [user]);

    async function handleLogin() {
        setLoading(true);
        await login({
            email: "test@example.com",
            password: "password",
            remember: true,
            setErrors,
            setStatus,
        });
        setAuth(true);
        setLoading(false);
    }
    async function handleLogout() {
        setLoading(true);
        await logout();
        setAuth(false);
        setLoading(false);
    }
    return (
        <div>
            <div className="flex items-center">
                <button
                    onClick={handleLogin}
                    disabled={auth || loading}
                    className={`px-2 py-1 text-sm font-semibold text-gray-900 bg-white rounded shadow-sm ring-1 ring-inset ring-gray-300 ${
                        !auth && !loading
                            ? "hover:bg-gray-50"
                            : "cursor-not-allowed disabled:opacity-50"
                    }`}
                >
                    <div className="text-sm">Login</div>
                </button>
                <button
                    onClick={handleLogout}
                    disabled={!auth || loading}
                    className={`px-2 py-1 text-sm font-semibold text-gray-900 bg-white rounded shadow-sm ring-1 ring-inset ring-gray-300 ${
                        auth && !loading
                            ? "hover:bg-gray-50"
                            : "cursor-not-allowed disabled:opacity-50"
                    }`}
                >
                    <div className="text-sm font-bold text-gray-900">
                        Logout
                    </div>
                </button>
                {loading && <div className="ml-3 text-sm">Loading...</div>}
                {user && !loading && (<div className="ml-3 text-sm">Hi, {user.name}</div>)}
            </div>
            {status && <div className="text-sm">{status}</div>}
            {errors.map((error, index) => (
                <div className="text-sm" key={index}>
                    {error}
                </div>
            ))}
        </div>
    );
}

export default Auth;
