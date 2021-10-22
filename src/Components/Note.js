import React from "react";

function Note({ Tittle, Text }) {
  return (
    <div>
      <div class="flex flex-col items-center mt-10">
        <h1 class="text-black font-bold text-2xl">{Tittle}</h1>
        <p class="text-gray-500 text-sm max-w-sm md:max-w-xl mt-5 text-center">
          {Text}
        </p>
      </div>
    </div>
  );
}

export default Note;
