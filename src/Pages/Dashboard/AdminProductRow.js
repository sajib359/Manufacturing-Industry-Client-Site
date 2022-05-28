
import { faPenAlt, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Swal from 'sweetalert2';

const AdminProductRow = ({ product, index, refetch }) => {
    console.log(product);
    const handleDel = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: `You are deleting orderID: ${product.productName}. You can't revert it.`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/products/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                  Swal.fire("Deleted!", "The Product has been deleted.", "success");
                  refetch();
                }
              });
          }
        });
      };
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{product?.name}</td>
        <td>
          <img src={product?.image} className="w-8 h-8" alt=''></img>
        </td>
        <td>{product?.aqty}</td>
        <td>{product?.minqty}</td>
        <td>{product.price}</td>
        <td>{product.description.slice(0, 10)}</td>
        <td className="flex gap-1">
          <FontAwesomeIcon
            onClick={() => handleDel(product._id)}
            className="font-2xl cursor-pointer bg-red-600 p-2 rounded text-white"
            icon={faTrashCan}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="font-2xl cursor-pointer bg-green-600 p-2 rounded text-white"
            icon={faPenAlt}
          ></FontAwesomeIcon>
        </td>
      </tr>
    );
};

export default AdminProductRow;