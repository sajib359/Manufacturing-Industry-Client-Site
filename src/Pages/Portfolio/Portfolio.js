import React from "react";
import Skill from "./Skill";

const Portfolio = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            className="max-w-sm rounded-lg shadow-2xl"
            src="sajib.jpg"
            alt=""
          />
          <div>
            <h1 class="text-5xl font-bold my-10">Sajib Hossain</h1>
            <p className="mb-3 font-bold text-xl text-blue-500">
              51/A/11 West Razar Bazar , Dhaka 1212
            </p>
            <p className="mb-3 font-bold text-xl text-blue-500">
              Contract: 01761594197
            </p>
            <p className="mb-3 font-bold text-xl text-blue-500">
              Email: sajib.sj359@gmail.com
            </p>
            <button class="btn btn-primary my-5">
              {" "}
              <a href="https://www.linkedin.com/in/sajib359?fbclid=IwAR2zyrnDzoIygeFcs7NgN5xXTcwv_hOaIdyYbwehURfdV9qlUrNGoSfG5NU&original_referer=https%3A%2F%2Fl.facebook.com%2F">
                Find Me
              </a>{" "}
            </button>
          </div>
        </div>
      </div>

      <h1 className="text-5xl font-bold bg-black text-orange-400 py-3">
        Educational Background
      </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Exam</th>
              <th>Institution</th>
              <th>Board</th>
              <th>Passing Year</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>1</th>
              <td>Secondary School Certificate (SSC)</td>
              <td>Jamalpur High School</td>
              <td>Dhaka</td>
              <td>2013</td>
            </tr>
            {/* <!-- row 2 --> */}
            <tr class="hover">
              <th>2</th>
              <td>Higher Secondary Certificate (HSC) </td>
              <td>Govt. Ashek Mahmud Collage</td>
              <td>Dhaka</td>
              <td>2015</td>
            </tr>
            {/* <!-- row 3 --> */}
            <tr>
              <th>3</th>
              <td>BSc in Computer Science & Engineering</td>
              <td>Daffodil International University</td>
              <td>UGC</td>
              <td>2020</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* skill */}
      <div>
       
        <Skill></Skill>
        </div>
       
        
      </div>
    
  );
};

export default Portfolio;
