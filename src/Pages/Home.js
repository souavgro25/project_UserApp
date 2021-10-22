import React from "react";
import Hero from "../Components/Hero";
import Feature from "../Components/Feature";
import Note from "../Components/Note";

import Catergory from "../Components/Catergory";
import ProducteSection from "../Components/ProducteSection";
function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <Note
        Tittle="why buy from us ?"
        Text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint id non
      voluptatibus aliquid mollitia odit exercitationem consequatur, aliquam
      omnis sapiente molestias atque iste rerum itaque veritatis fugiat sed
      nihil."
      />
      <Catergory />
      <ProducteSection />
    </div>
  );
}

export default Home;
