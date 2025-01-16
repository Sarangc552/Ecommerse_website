import React from "react";
import Cardprdoucts from "../Card/Cardprdoucts";
import Banar from "./Banar";
import Contactpage from "../Contact/Contactpage";
import Shopwithus from "./Shopwithus";

export const Home = ({ products }) => {
  // console.log(products);

  return (
    <div>
      <Banar/>
      <Cardprdoucts products={products} />
      <Shopwithus/>
      <Contactpage/>
    </div>
  );
};
