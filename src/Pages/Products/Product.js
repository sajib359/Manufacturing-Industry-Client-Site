import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const navigate = useNavigate()
    const handleOrder = (productId) => {
        navigate(`/order/${productId}`)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={product.imgURL} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> <span>Product name:</span>
                    {product.name}
                    <div className="badge badge-secondary p-3">${product.price}</div>
                </h2>
                <p className="pb-2">{product.description}</p>
                <div className="flex justify-between">
                    <div className="badge badge-outline p-2">
                        Min. Qty. - {product.minquantity} pc's
                    </div>
                    <div className="badge badge-outline">
                        Able. Qty. - {product.aqty} pc's
                    </div>
                </div>
                <button
                    onClick={() => handleOrder(product._id)}
                    className="btn btn-outline btn-secondary lg:my-2 lg:mt-8"
                >
                    Order Now
                    <i className="fa-solid fa-store px-2"></i>
                </button>
            </div>
        </div>
    );
};

export default Product;