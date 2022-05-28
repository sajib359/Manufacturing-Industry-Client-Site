import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AdminProductRow from './AdminProductRow';

const ManageProduct = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("https://agile-hamlet-27266.herokuapp.com/products", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-secondary font-bold text-xl">
        Manage All Product here
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Img</th>
              <th>Available</th>
              <th>Min Qty</th>
              <th>Price</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <AdminProductRow
                key={product._id}
                product={product}
                refetch={refetch}
                index={index}
              ></AdminProductRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;