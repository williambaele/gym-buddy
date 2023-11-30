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

  return (
    <div className="flex items-center justify-center flex-col h-screen bg-[#F6F6FE] px-4 md:px-0">
      <div class="bg-[#312E7F] p-6 rounded-xl shadow-sm w-full md:w-1/3">
        <div class="mx-auto max-w-lg text-center ">
          <h1 class="text-2xl font-bold sm:text-3xl text-gray-100">Sign in</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          class="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label for="email" class="sr-only">
              Email
            </label>

            <div class="relative">
              <input
                type="email"
                class="w-full rounded-lg border-gray-100 p-4 pe-12 text-sm shadow-sm outline-none"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label for="password" class="sr-only">
              Password
            </label>

            <div class="relative">
              <input
                type="password"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-1 bg-[#C8C7EB] rounded-md font-bold text-white"
          >
            Login
          </button>
          <div class="flex items-center justify-between">
            <p class="text-sm text-gray-100">
              No account?
              <a class="underline" href="/signup">
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
