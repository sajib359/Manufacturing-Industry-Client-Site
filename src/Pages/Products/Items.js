import { faEye, faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import React from "react";
import { Toaster } from "react-hot-toast";
  
  import { Link } from "react-router-dom";
  
  const Items = ({ product, handleDelete }) => {
    return (
      <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
        <td
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
        >
          <Toaster position="top-right" reverseOrder={false}></Toaster>
          {product.name}
        </td>
        <td className="px-6 py-4">{product.quantity}</td>
        <td className="px-6 py-4">{product.supplier}</td>
        <td className="px-6 py-4">{product.price}</td>
        <td className="px-6 py-4 flex gap-2">
          <Link to={`/view/${product._id}`} className="text-xl text-green-600 hover:scale-125 ease-in-out duration-500">
            <FontAwesomeIcon icon={faEye} />
          </Link>
          <Link to={`/update/${product._id}`} className="text-xl text-black hover:scale-125 ease-in-out duration-500">
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
          <button
            onClick={() => handleDelete(product._id)}
            className="text-red-800"
          >
            <FontAwesomeIcon className="text-xl hover:scale-125 ease-in-out duration-500" icon={faTrashAlt} />
          </button>
        </td>
      </tr>
    );
  };
  
  export default Items;