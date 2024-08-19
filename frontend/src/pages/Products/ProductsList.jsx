import React from "react";
import Sidebar from "../../components/Sidebar";
import ProductCard from "../../components/ProductCard";

const ProductsList = () => {
  return (
    <>
      <div className="grid grid-cols-1 py-4 pr-5 md:grid-cols-3 lg:grid-cols-4">
        <div className="col-span-1  p-4 rounded md:col-span-1  lg:col-span-1">
           <Sidebar/>
        </div>

        <div className="col-span-1 p-4 rounded md:col-span-2  lg:col-span-3">
            <ProductCard/>
        </div>
      </div>
    </>
  );
};

export default ProductsList;
