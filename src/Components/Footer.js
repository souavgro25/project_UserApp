import React from "react";

function Footer() {
  return (
    <div>
      {/* header lower */}
      <section class="flex flex-wrap justify-center  bg-blue-600 md:justify-between px-5 items-center">
        <div class="flex text-white md:gap-x-5">
          <p class="bg-yellow-300 text-black font-medium py-3 pr-5 pl-3">
            Home
          </p>
          <p class="py-3 pr-5 pl-3">Contact</p>
          <p class="py-3 pr-5 pl-3">about</p>
          <p class="py-3 pr-5 pl-3">Sign in</p>
        </div>
        <div class="flex items-center text-white gap-x-4">
          <i class="fas fa-phone-alt"></i>
          <p class="py-3">0111-9637868</p>
          <div class="flex items-center text-black  gap-x-2 bg-yellow-300 ">
            <i class="far fa-comment-alt fa-lg ml-2 "></i>
            <p class="text-black font-medium py-3 px-2">Blog</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
