import React from 'react';

const Experience = () => {
    return (
        <div>
            <h1 className="text-3xl bg-green-300 font-bold py-3 mb-5">Experience</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center justify-items-center'>
            <div class="card w-96  bg-neutral text-neutral-content">
                <div class="card-body items-center text-center my-8 ">
                    <h2 class="card-title  font-bold text-orange-300">Full Stack Development</h2>
                    <p className='text-lg font-bold'>Professional course from <span className='text-blue-300'>Programming Hero</span></p>
                    <p className='justify-end font-bold'>During : <span className='text-red-500'>01 January to Running</span></p>
                    <p className='text-xl'>This is my best decision to grave this course i can learn more and confident to build web site . </p>
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary "> <a href="https://www.programming-hero.com/"> Programming Hero </a></button>
                    </div>
                </div>
            </div>

            <div class="card w-96 bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="card-title font-bold text-orange-300">Web Content Developer</h2>
                    <p className='text-lg font-bold'>Working at <span className='text-blue-300'>Redgreen </span></p>
                    <p className='justify-end font-bold'>During : <span className='text-red-500'>01 September 2021  to Running</span></p>
                    <p className='text-xl'>This is my first job experience here i can learn about corporate culture . I always love to learning anything new web development is my passion now I am learning full stack development  </p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary "><a href="https://redgreen.co/">Redgreen</a></button>
                    </div>
                </div>
            </div>

            <div class="card w-96 bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="card-title font-bold text-orange-300">Font-End Developer</h2>
                    <p className='text-lg font-bold'>Professional course from <span className='text-blue-300'>Computer & Programming Club (DIU) </span></p>
                    <p className='justify-end font-bold'>During : <span className='text-red-500'>june 2019  to August 2019</span></p>
                    <p className='text-xl'>In this Course mainly I can learn web Frontend by using HTML CSS Bootstrap and little bit Javascript. </p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary "><a href="https://cpc.daffodilvarsity.edu.bd/">CPC</a></button>
                    </div>
                </div>
            </div>

            <div class="card w-96 bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="card-title font-bold text-orange-300">Android App Development</h2>
                    <p className='text-lg font-bold'>Professional course from <span className='text-blue-300'>BASIS Institute of Technology & Management (BITM) </span></p>
                    <p className='justify-end font-bold'>During : <span className='text-red-500'>September 2018  to December 2018</span></p>
                    <p className='text-xl'>This is my first professional course here i learn more things professionaly and loves coding </p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary "><a href="http://www.bitm.org.bd/">BITM</a></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Experience;