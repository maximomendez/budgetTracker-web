"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import InputField from "../../components/iu/inputfield/page";
import LOGIN_USER from "../../graphql/mutations/loginUser";
import { navigateToHome } from "../actions";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const [loginUser, { loading, error, data }] = useMutation(LOGIN_USER);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await loginUser({
        variables: {
          email: loginData.email,
          password: loginData.password,
        },
      });
      navigateToHome();
    } catch (submitError) {
      console.log("Error caught:", submitError);
      // Cast submitError as an instance of Error
      if (submitError instanceof Error) {
        console.log(submitError.message); // Log the message
        return toast.error(submitError.message); // Pass the message to the toast
      } else {
        console.log("Unknown error:", submitError);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex rounded-lg overflow-hidden z-50 bg-gray-300">
        <div className="w-full bg-gray-100 min-w-80 sm:min-w-96 flex items-center justify-center">
          <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-semibold mb-6 text-black text-center">
              Login
            </h1>
            <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
              Welcome back! Log in to your account
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <InputField
                label="Email"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
              />

              <InputField
                label="Password"
                id="password"
                name="password"
                type="password"
                value={loginData.password}
                onChange={handleChange}
              />
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300
										disabled:opacity-50 disabled:cursor-not-allowed
									"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Login"}
                </button>
              </div>
            </form>
            <div className="mt-4 text-sm text-gray-600 text-center">
              <p>
                {"Don't"} have an account?{" "}
                <Link href="/register" className="text-black hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
