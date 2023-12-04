import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const [errormsg, setErrorMsg] = useState("");
  const { login, error } = useLogin();

  //USER'S INFOS
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //LOGIN METHOD
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex items-center justify-center flex-col h-screen bg-[#F6F6FE] px-4 md:px-0">
      <div className="bg-[#312E7F] p-6 rounded-xl shadow-sm w-full md:w-1/3">
        <div className="max-w-lg mx-auto text-center ">
          <h1 className="text-2xl font-bold text-gray-100 sm:text-3xl">
            Sign in
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mt-8 mb-0 space-y-4"
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full p-4 text-sm border-gray-100 rounded-lg shadow-sm outline-none pe-12"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <span className="absolute inset-y-0 grid px-4 end-0 place-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm outline-none pe-12"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <span
              className="absolute inset-y-0 grid px-4 end-0 place-content-center"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
          <button
            type="submit"
            className="w-full p-1 bg-[#C8C7EB] rounded-md font-bold text-white"
          >
            Login
          </button>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-100">
              No account?
              <a className="underline" href="/signup">
                {" "}
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
