import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const nameRef = useRef("");
  const aqtyRef = useRef("");
  const priceRef = useRef();
  const descriptionRef = useRef("");
  const imgurlRef = useRef("");
  const minquantityRef = useRef("");

  const handleBtn = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const aqty = aqtyRef.current.value;
    const price = priceRef.current.value;
    const description = descriptionRef.current.value;
    const imgURL = imgurlRef.current.value;
    // const owneremail = user.email;
    const minquantity = minquantityRef.current.value;
    // const userid = user.uid;
    const product = {
      name,
      aqty,
      price,
      minquantity,
      description,
      imgURL,
      // owneremail,
      // userid,
    };
    const url = "http://localhost:5000/product";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast.success("Successfully Added!");
  };
  return (
    <div className="">
      <form onSubmit={handleBtn} className="w-full mx-auto max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Product Name
            </label>
            <input
              ref={nameRef}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="name"
              placeholder="product name"
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Available Quantity
            </label>
            <input
              ref={aqtyRef}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="aqty"
              placeholder="available quantity"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Description
            </label>
            <input
              ref={descriptionRef}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              name="description"
              type="text"
              placeholder="write your product description"
            />
            <p className="text-gray-600 text-xs italic">
              write your products full and proper description
            </p>
          </div>
        </div>
        <div className="col-span-3 sm:col-span-2">
          <label htmlFor="imgURL" className="block  font-medium text-gray-700">
            Image URL
          </label>
          <div className="mt-1 flex rounded-md shadow-sm mb-3">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              http://
            </span>
            <input
              required
              ref={imgurlRef}
              type="text"
              name="imgURL"
              id="imgURL"
              className="focus:ring-green-500 focus:border-green-500 flex-1 block w-full rounded-none rounded-r-md sm: border-gray-300 border pl-4 "
              placeholder="imgbb.com/"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Price
            </label>
            <input
              ref={priceRef}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              name="price"
              placeholder="How much"
            />
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                MinimumQuantity
              </label>
              <input
                ref={minquantityRef}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                name="minquantity"
                placeholder="Minimum Quantity "
              />
            </div>
          </div>
          

          <button
            type="submit"
            className="bg-blue-400 font-bold p-2 mx-auto mt-3"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;