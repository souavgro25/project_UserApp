import React from "react";

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <p className="text-blue-600 font-bold font-sans  text-3xl mb-16 mt-5">
        Contact us
      </p>
      <form className="flex flex-col  gap-y-5" action="submit">
        <input
          className="text-sm font-normal bg-gray-100 outline-none pr-20 pl-4 text-gray-700 rounded-md py-4 "
          type="text"
          name="name"
          placeholder="Name"
          id=""
        />
        <input
          className="text-sm font-normal bg-gray-100 outline-none text-gray-700 pl-4 rounded-md pr-20   py-4 "
          type="email"
          name="email"
          placeholder="Email"
          id=""
        />
        <textarea
          className="text-gray-700 pt-2 outline-none pr-20 pl-4 rounded-lg text-sm bg-gray-100"
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          className=" self-start bg-blue-500 hover:bg-blue-600 px-5 py-2 text-white rounded-md  "
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
