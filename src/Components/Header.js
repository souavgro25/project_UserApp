import React from "react";

function Header() {
  return (
    <div>
      {/* header top */}
      <div id="show" class="md:hidden">
        <i class=" text-blue-600 fas fa-align-justify fa-2x ml-5 my-2"></i>
      </div>
      <div class="hidden md:flex justify-around bg-white header-first py-2">
        <div class="flex gap-2">
          <div>
            <p>Home</p>
          </div>
          <div>
            <p>About Us</p>
          </div>
          <div>
            <p>Contact</p>
          </div>
          <div>
            <p>FAQ</p>
          </div>
        </div>
        <div>
          <p>US Dollar</p>
        </div>
        <div class="flex gap-2">
          <div>
            <p>more menus</p>
          </div>
          <div>
            <p>Delivery</p>
          </div>
        </div>
      </div>
      {/* header mid */}
      <header class=" bg-gray-100 flex flex-wrap justify-around py-8 items-center">
        <h2 class="font-bold text-3xl font-serif">JOURNAL</h2>
        <form class="flex">
          <select
            class="bg-blue-600 text-white py-3 px-2 rounded-l"
            name=""
            id=""
          >
            <option value="">all</option>
            <option value="">new</option>
          </select>
          <input
            class="outline-none px-2 md:px-5"
            type="text"
            placeholder="Search here "
          />
          <button class="rounded-r bg-blue-600 text-white px-5">
            <i class="fas fa-search"></i>
          </button>
        </form>
        <div class="hidden md:flex gap-2">
          <div class=" flex flex-col items-center ">
            <i class="fas fa-user"></i>
            <p>sign in</p>
          </div>
          <div class=" flex flex-col items-center ">
            <i class="far fa-address-card"></i>
            <p>Register</p>
          </div>
          <div class=" flex flex-col items-center ">
            <i class="far fa-heart"></i>
            <p>wishlist</p>
          </div>
          <div class=" flex flex-col items-center ">
            <i class="fas fa-sliders-h"></i>
            <p>Compare</p>
          </div>
        </div>
        <div class="hidden md:flex">
          <p>0 items - $0.00</p>
          <div>
            <i class="fas fa-cart-plus fa-lg ml-2 text-blue-600"></i>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
