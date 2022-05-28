
import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const ManageOrderRow = ({ order, refetch, index }) => {
    const markPaid = (id) => {
        const url = `https://localhost/5000/order/${id}`;
        console.log(url);
        fetch(url, {
            method: "put",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    toast.success(`OrderID: ${order._id.slice(5, -15)} is now Paid`);
                } else {
                    toast.error("You dont have enough permission!");
                }
            });
    };
    const addShipment = (id) => {
        const url = `https://agile-hamlet-27266.herokuapp.com/ship/${id}`;
        console.log(url);
        fetch(url, {
            method: "put",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    toast.success(`OrderID: ${order._id.slice(5, -15)} is now shipped`);
                } else {
                    toast.error("You dont have enough permission!");
                }
            });
    };

    const delOrder = (id) => {
        console.log("Deleting:", id);
        Swal.fire({
            title: "Are you sure?",
            text: `You are deleting orderID: ${order._id.slice(
                5,
                -15
            )}. You can't revert it.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://localhost/5000/orders/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount) {
                            refetch();
                            Swal.fire("Deleted!", "Your order has been deleted.", "success");
                        }
                    });
            }
        });
    };

    return (
        <tr>
            <th>{index + 1}</th>

            <td>{order.address}</td>
            <td>{order.orderPName}</td>
            <td>{order.orderQty}</td>
            <td>{order.orderPrice}</td>
            <td>
                <span className="block">{order?.paymentStatus?.toUpperCase()}</span>{" "}
                {order?.paymentStatus !== "pending" && <span>TrxID: {order.trxId}</span>}
            </td>
            <td>
                {order?.paid !== true ? <span
                    onClick={() => markPaid(order._id)}
                    className="bg-primary text-center p-1 my-1 block text-white rounded cursor-pointer"
                >
                    Make Paid
                </span> : <p>Paid</p>}
                {order?.orderStatus === "placed" && (
                    <span
                        onClick={() => addShipment(order._id)}
                        className="bg-blue-700 block text-center p-1 my-1 text-white rounded cursor-pointer"
                    >
                        Ship Order
                    </span>
                )}
                {order?.paymentStatus === "pending" && (
                    <span
                        onClick={() => delOrder(order._id)}
                        className="bg-red-600 block text-center p-1 my-1 text-white rounded cursor-pointer"
                    >
                        Delete Order
                    </span>
                )}
            </td>
        </tr>
    );
};

export default ManageOrderRow;