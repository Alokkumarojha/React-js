import React, { useState } from "react";
import { account } from "../../Appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const loginUser = async (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      setErrorMessage("Please enter both email and password");
      return;
    }

    try {
      setLoading(true);
      await account.createEmailPasswordSession(user.email, user.password);
      navigate("/profile");
    } catch (error) {
      setErrorMessage("Wrong email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 px-6">
      <h2 className="text-center font-bold text-2xl">Log in</h2>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg">
          {errorMessage && (
            <p className="mb-4 text-red-600 font-medium text-center">
              {errorMessage}
            </p>
          )}
          <form className="space-y-6" onSubmit={loginUser}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={user.email}
                autoComplete="email"
                required
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={user.password}
                  autoComplete="current-password"
                  required
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex justify-between">
              <a
                href="/signup"
                className="text-indigo-600 hover:text-indigo-500 text-sm"
              >
                Don't have an account? Sign Up
              </a>
            </div>

            <div>
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-md shadow-sm text-white text-sm font-medium 
                  ${
                    !user.email || !user.password || loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700"
                  } 
                `}
                disabled={!user.email || !user.password || loading}
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
