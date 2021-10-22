import React from "react";
import Note from "./Note";
import Productname from "./Productname";

function ProducteSection() {
  return (
    <div>
      <section class="bg-gray-100 mt-10">
        <Note
          Tittle="Featured Products "
          Text="     Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        blanditiis. Expedita veniam natus, similique cupiditate distinctio
        minima quo beatae. Corporis!"
        />

        <section class="flex flex-col items-center mt-10">
          <div class="flex gap-x-2 bg-gray-200 text-black">
            <p class="cursor-pointer bg-blue-600 px-2 py-1 text-white">
              Featured
            </p>
            <p class="cursor-pointer hover:bg-blue-600 px-2 py-1 hover:text-white">
              Latest
            </p>
            <p class="cursor-pointer hover:bg-blue-600 px-2 py-1 hover:text-white">
              BestSeller
            </p>
            <p class="cursor-pointer hover:bg-blue-600 px-2 py-1 hover:text-white">
              Specials
            </p>
          </div>
          <div class="flex mt-10 gap-x-4 overflow-x-auto mb-10 ml-5">
            <Productname
              price="100$"
              image="https://images.unsplash.com/photo-1600086827875-a63b01f1335c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80"
            />
            <Productname
              price="100$"
              image="https://images.unsplash.com/photo-1600086827875-a63b01f1335c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80"
            />
            <Productname
              price="100$"
              image="https://images.unsplash.com/photo-1600086827875-a63b01f1335c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80"
            />
            <Productname
              price="100$"
              image="https://images.unsplash.com/photo-1600086827875-a63b01f1335c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80"
            />
          </div>
        </section>
      </section>
    </div>
  );
}

export default ProducteSection;
