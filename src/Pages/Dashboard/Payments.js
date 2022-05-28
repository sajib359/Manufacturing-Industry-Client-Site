import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(
  " pk_test_51L4LCoEVbryrp6mgAK4sIQ0v96TrCCGJCfoTUbCLZweYQYcEKThpfutJaxlljkSLHuqUFEzN47p6C3zLrtqqkqFu00OxN1TJji"
);


const Payments = () => {
  const [user] = useAuthState(auth)
  const { paymentId } = useParams()
  const url = `https://agile-hamlet-27266.herokuapp.com/orders/${paymentId} `


  const { data: order, isLoading } = useQuery(["order", paymentId], () =>
    fetch(url, {
      method: "GET",

    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (

    <div className="px-6 lg:px-12">
      <h1>pay for {paymentId}</h1>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-xl text-secondary">Hello, {user.displayName} ☺</p>
          <h2 class="card-title">
            Please pay for{" "}
            <span className="font-bold">"{order.orderPName}"</span>
          </h2>

          <p>
            Please Pay:{" "}
            <span className="text-orange-500">${order.orderPrice}</span>
          </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payments;