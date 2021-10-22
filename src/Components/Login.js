import React from "react";

function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <p className="text-blue-600 font-bold font-sans  text-3xl mb-16 mt-5">
        Login
      </p>
      <form className="flex flex-col  gap-y-5" action="submit">
        <input
          className="text-sm font-normal bg-gray-100 pr-20 pl-4  rounded-md py-4 "
          type="text"
          name="username"
          placeholder="Username"
          id=""
        />
        <input
          className="text-sm font-normal bg-gray-100 text-gray-400 pl-4 rounded-md pr-20   py-4 "
          type="password"
          name="password"
          placeholder="Password"
          id=""
        />
        <button
          className=" self-start bg-blue-500 hover:bg-blue-600 px-5 py-2 text-white rounded-md  "
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
