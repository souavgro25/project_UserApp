function Hero() {
  return (
    <div>
      <section class="grid md:grid-rows-1 grid-rows-2 md:grid-cols-4 gap-4 mx-5 mt-5">
        <div
          style={{ backgroundColor: "#181b1e" }}
          class="flex col-span-3 justify-between items-center rounded"
        >
          <div class="flex flex-col gap-y-5 items-start ml-5 md:ml-10">
            <button class="bg-blue-600 px-2 py-1 text-white rounded">
              new arrivals
            </button>
            <p class="text-xl md:text-3xl text-white font-bold max-w-sm">
              Sound that goes straight to your heart
            </p>
            <button
              class="
              text-white
              bg-gray-500
              font-medium
              px-3
              text-md
              border border-white
              py-2
              rounded
            "
            >
              shop Now
            </button>
          </div>
          <img
            class="h-60 md:h-full rounded-r"
            src="https://images.unsplash.com/photo-1520170350707-b2da59970118?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80"
            alt=""
          />
        </div>
        <div class="col-span-1 ">
          <div class="flex md:flex-col gap-y-4 gap-x-2 ">
            <div class="bg-gray-100 flex justify-between items-center rounded ">
              <div class="ml-5">
                <p class="text-blue-600 font-bold font-sans">smart looks</p>
                <p class="max-w-xs text-balck font-bold">
                  itelligent and durable design
                </p>
              </div>
              <img
                class="h-36 md:h-60 "
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=331&q=80"
                alt=""
              />
            </div>
            <div class="flex flex-col gap-y-4">
              <div class="bg-gray-100 flex justify-between items-center rounded">
                <div class="ml-5">
                  <p class="text-blue-600 font-bold font-sans">smart looks</p>
                  <p class="max-w-xs text-balck font-bold">
                    itelligent and durable design
                  </p>
                </div>
                <img
                  class="h-36 md:h-60"
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=331&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
