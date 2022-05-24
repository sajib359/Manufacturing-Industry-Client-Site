import React from 'react';

const Banner = () => {
    return (
        <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img src="https://img.freepik.com/free-photo/manager-supervisor-industrial-worker-uniform-walking-large-metal-factory-hall-talking-about-increasing-production_342744-114.jpg?w=1380&t=st=1653323295~exp=1653323895~hmac=d54102738e109c9c0d3aca33a01d936a39bdd3db764ff65d6083648fb91cc40f" alt='' class="w-full "></img> 
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">❮</a> 
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" class="carousel-item relative w-full">
          <img src="https://img.freepik.com/free-photo/contemporary-room-workplace-office-supplies-concept_53876-16309.jpg?t=st=1653323425~exp=1653324025~hmac=cebb95a8a9737dffbe6b8eb26e0881542b0f45ca1633dc8e099210da74a59761&w=1800" alt='' class="w-full"></img>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a> 
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" class="carousel-item relative w-full">
          <img src="https://img.freepik.com/free-photo/male-technician-working-broken-computer_23-2147922177.jpg?t=st=1653377085~exp=1653377685~hmac=a073a4bd0f26e862b19811b4fa20c091052f99015c78ee45dbe81b26ae483377&w=900" alt='' class="w-full h-3/4"></img>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a> 
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div> 
        
      </div>
    );
};

export default Banner;