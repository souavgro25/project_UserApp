function Categoryname({ image, name }) {
  return (
    <div class="relative flex-none">
      <img class="h-60 w-60" src={image} alt="" />
      <div class="flex justify-center items-end absolute inset-0 ">
        <p class="bg-white rounded px-5 py-1 text-black">{name}</p>
      </div>
    </div>
  );
}

export default Categoryname;
