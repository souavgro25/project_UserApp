function Productname({ price, image }) {
  return (
    <div>
      <div class="relative flex-none">
        <img class="h-60 w-80 rounded-md" src={image} alt="" />
        <div class="flex justify-center items-end absolute inset-0 ">
          <p class="bg-blue-400 rounded px-10 py-1 text-white hover:bg-blue-600 cursor-pointer">
            shop
          </p>
        </div>
        <div class=" bg-white  rounded-r flex-col gap-y-4 flex justify-center items-end absolute bottom-10 ">
          <div class="px-1">
            <span class="fa fa-star text-yellow-300"></span>
            <span class="fa fa-star text-yellow-300"></span>
            <span class="fa fa-star text-yellow-300"></span>
            <span class="fa fa-star text-yellow-300"></span>
            <span class="fa fa-star"></span>
          </div>
          <p class="px-2 py-1 font-bold">
            price: <span class="text-gray-500">{price}</span>
          </p>
        </div>
        <div class="absolute top-0 right-0 px-2 py-1 bg-yellow-300 rounded-md">
          <p>sale</p>
        </div>
      </div>
    </div>
  );
}

export default Productname;
