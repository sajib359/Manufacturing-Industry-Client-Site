import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-5xl font-bold text-red-400 font-serif my-5'>Computer Manufacturing Industry Limited</h1>
            <p className='text-3xl text-blue-400 font-mono font-bold'>This mainly Manufacture Computer Casing and Power Supply</p>
            <div>
                <h1>Company Profile</h1>
                div class="hero min-h-screen" style="background-image: url(https://img.freepik.com/free-photo/fiberglass-production-industry-equipment-manufacture_88135-444.jpg?w=1380);">
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>

            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;