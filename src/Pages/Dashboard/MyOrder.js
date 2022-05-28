import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrder = () => {
    const [user, loading] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/order?userEmail=${user.email}`, {
            method: 'GET'
        }).then(res => res.json())
            .then(data => {
                setOrders(data)
            })

    }, [])


    if (loading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <h1>my order</h1>
            <div class="overflow-x-auto mt-2 lg:mt-5">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Transaction ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.userName}</td>
                                <td>
                                    {order.orderPName.slice(0, 10)}...
                                </td>
                                <td>{order.orderQty}</td>
                                <td>{order.orderPrice}</td>

                                <td>
                                    {order.orderPrice && !order.paid && (
                                        <Link to={`/dashboard/payment/${order._id}`}>
                                            <button className="btn btn-xs btn-secondary lg:px-5">
                                                Pay
                                            </button>
                                        </Link>
                                    )}
                                    {order.orderPrice && order.paid && (
                                        <div>
                                            <button className="btn btn-xs disabled text-white lg:px-4">
                                                Paid
                                            </button>
                                           
                                        </div>
                                    )}
                                </td>
                                <td>
                                <p>
                                                Transaction id:{" "}
                                                <span className="text-primary">
                                                    {order.transactionId}
                                                </span>
                                            </p>
                                </td>
                                <td>
                                    <button
                                        // onClick={() => handleDeleteOrder(order._id)}
                                        for="delete-confirm-modal"
                                        class="btn btn-xs btn-error"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;