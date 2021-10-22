import Categoryname from "./Categoryname";

function Catergory() {
  return (
    <section className="flex flex-col items-center mt-10">
      <div className="flex gap-x-2 bg-gray-100 text-black">
        <p className="cursor-pointer bg-blue-600 px-2 py-1 text-white">
          Top category
        </p>
        <p className="cursor-pointer hover:bg-blue-600 px-2 py-1 hover:text-white">
          electronics
        </p>
        <p className="cursor-pointer hover:bg-blue-600 px-2 py-1 hover:text-white">
          Beauty
        </p>
        <p className="cursor-pointer hover:bg-blue-600 px-2 py-1 hover:text-white">
          Fashions
        </p>
      </div>
      <div className="flex mt-10 gap-x-4 overflow-x-scroll flex-nowrap ml-5 ">
        <Categoryname
          name="fashion"
          image="https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=362&q=80"
        />
        <Categoryname
          name="fashion"
          image="https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=362&q=80"
        />
        <Categoryname
          name="fashion"
          image="https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=362&q=80"
        />
        <Categoryname
          name="fashion"
          image="https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=362&q=80"
        />
        <Categoryname
          name="fashion"
          image="https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=362&q=80"
        />
      </div>
    </section>
  );
}

export default Catergory;
