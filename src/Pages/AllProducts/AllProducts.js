import React from 'react';

const AllProducts = ({product}) => {
    return (
        <div className="border-2 w-96 rounded-md mt-5 shadow-lg bg-white">
      <div>
        <img className="mx-auto rounded-lg mt-6 w-60 h-60" src={product.imgURL} alt="" />
      </div>
      <div className="text-left mt-5 p-3">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <h3 className="text-xl font-bold">
          {" "}
          Supplier:{" "}
          <span className="text-base text-violet-500">{product.supplier}</span>
        </h3>
        <h4 className="text-xl font-bold ">PRICE: {product.price}</h4>
        <p className="text-xl  font-mono ">{product.description.slice(0,100)}</p>
        
      </div>
    </div>
    );
};

export default AllProducts;