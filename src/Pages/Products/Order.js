import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Order = () => {
    const [user, loading] = useAuthState(auth);
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                console.log(data);
            });
    }, []);
    if (loading) {
        return <Loading></Loading>
    }
    const handleOrder = event => {
        event.preventDefault()
        const order = {
            orderProduct: product._id,
            orderPName: product.name,
            userEmail: user.email,
            userName: user.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value,
            orderPrice: event.target.quantity.value * product.price,
            orderQty: event.target.quantity.value,
        }
        fetch('http://localhost:5000/order', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("Your order is successful", {
                    autoClose: 1000,
                });

                event.target.reset();
            });
    }
    return (
        <div className="">
            <h1>this is head {productId}</h1>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left lg:px-8 pt-8">
                        <h1 class="lg:text-3xl font-bold">
                            <span className="text-secondary text-center">{product.name}</span>
                        </h1>
                        <img className="mx-auto" src={product.image} alt="" />
                        <p class="py-3">
                            <span className="font-bold">Description:</span>
                            {product.description}
                        </p>
                        <p>
                            <span className="font-bold">Available: </span>
                            {product.aQty} pc's
                        </p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <header>
                                <h2 className="text-3xl font-bold pb-2">Order Details</h2>
                            </header>
                            <form onSubmit={handleOrder}>
                                <div class="form-control mb-3">
                                    <input
                                        disabled
                                        type="text"
                                        value={user.displayName}
                                        class="input input-bordered"
                                    />
                                </div>
                                <div class="form-control mb-3">
                                    <input
                                        disabled
                                        type="text"
                                        value={user.email}
                                        class="input input-bordered"
                                    />
                                </div>

                                <div class="form-control mb-3">
                                    <input
                                        required
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"
                                        class="input input-bordered"
                                    />
                                </div>
                                <div class="form-control mb-3">
                                    <textarea
                                        required
                                        name="address"
                                        placeholder="Address"
                                        class="input input-bordered"
                                    />
                                </div>
                                <div class="form-control mb-3">
                                    <input
                                        required
                                        type="number"
                                        name="quantity"

                                        // onChange={handleQuantity}
                                        placeholder="Order quantity"
                                        class="input input-bordered"
                                    />
                                </div>

                                {/* {<p className="text-sm text-error">{quantityError}</p>} */}
                                <div class="form-control mt-6">
                                    {/* {quantityError ? (
                                        <button class="btn disabled bg-gray-400 cursor-not-allowed hover-none">
                                            Order
                                        </button>
                                    ) : (
                                        <button class="btn btn-primary text-white">Order</button>
                                    )} */}
                                    <button class="btn btn-primary text-white">Order</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;