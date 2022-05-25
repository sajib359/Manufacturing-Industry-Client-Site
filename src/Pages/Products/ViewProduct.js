import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ViewProduct = () => {
  const [sProduct, setSProduct] = useState({});
  const { id } = useParams();
  const quantityRef = useRef("");
  useEffect(() => {
    const url = `https://glacial-river-10455.herokuapp.com/view/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSProduct(data));
  }, []);
  console.log();
  const handleUpdateQty = (e) => {
    e.preventDefault();
    const quantity =
      parseInt(quantityRef.current.value) + parseInt(sProduct.quantity);
    const newQty = { quantity };
    const url = `https://glacial-river-10455.herokuapp.com/sview/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newQty),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast.success("Successfully Updated!");
  };

  return (
    <div className="w-full md:w-3/4 mx-auto mt-6">
      <Toaster position="top-right" reverseOrder={false}></Toaster>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img
            className="h-96 w-96 border border-green-200 rounded"
            src={sProduct.imgURL}
            alt={sProduct.name}
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-center">{sProduct.name}</h2>
          <p>
            <span className="font-bold">Supplier:</span>
            {sProduct.supplier}
          </p>
          <p>
            <span className="font-bold">Price:</span>
            {sProduct.price}
          </p>
          <p>
            <span className="font-bold">Quantity:</span>
            {sProduct.quantity}
          </p>
          <p>
            <span className="font-bold">Description:</span>
          </p>
          <p> {sProduct.description}</p>
          <div className="flex gap-2 justify-evenly">
            <button className="px-4 py-2 bg-green-400 rounded text-white font-bold">
              Deliver
            </button>
            <form onSubmit={handleUpdateQty}>
              <input
                className="border rounded pl-2 h-full mr-2"
                type="number"
                name="stockQ"
                ref={quantityRef}
                id="stockQ"
                placeholder="Quantity"
              />
              <input
                className="px-4 py-2 bg-green-400 rounded text-white font-bold"
                type="submit"
                value="Add Stock"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;

