import React from 'react';
import toast from 'react-hot-toast';
import Items from './Items';

const Products = () => {
    const url = `http://localhost:5000//view`;
    const askToSure = window.confirm("Are You Sure?");
    if (askToSure) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount === 1) {
            toast.success("Product Successfully Deleted!", {
              style: {
                border: "1px solid #4ade80",
                padding: "16px",
                color: "#14532d",
              },
              iconTheme: {
                primary: "#14532d",
                secondary: "#FFFAEE",
              },
            });
            const restProduct = products.filter(
              (product) => product._id !== id
            );
            setProducts(restProduct);
          } else {
            toast.error("Ops! Something Went Wrong");
          }
        });
    }
  
    return (
        <div className="md:w-3/4 mx-auto mt-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Manage All Product
        </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Supplier
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <Items
                  key={product._id}
                  product={product}
                  handleDelete={handleDelete}
                ></Items>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Products;