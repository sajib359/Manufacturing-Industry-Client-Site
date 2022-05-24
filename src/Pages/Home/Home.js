import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-5xl font-bold text-red-400 font-serif my-5'>Computer Manufacturing Industry Limited</h1>
            <p className='text-3xl text-blue-400 font-mono font-bold'>This mainly Manufacture Computer Casing and Power Supply</p>

            <Footer></Footer>

        </div>
    );
};

export default Home;