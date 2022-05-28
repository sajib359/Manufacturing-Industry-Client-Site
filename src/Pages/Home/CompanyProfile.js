import React from 'react';

const CompanyProfile = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 bg-sky-200'>
        
        <div class="hero min-h-screen bg-base-200">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body w-full">
              <img src=" https://img.freepik.com/free-photo/factory-workers-checking-quality-products-large-industrial-hall_342744-160.jpg?t=st=1653553910~exp=1653554510~hmac=ee0e47a68fa261a29ffe4ca5ca113227a743cda0c68e6e88eca74daf58619ce5&w=900" alt="" />

              <h3 className="text-3xl font-bold">Company Introduction:</h3>
              <p className="text-xl font-mono">
                SHENZHEN FPMAX INDUSTRY Co., Ltd, established in 2016 as a
                computer case and power supply factory and focused on domestic
                market, through years of expansion, we are becoming a
                professional manufacturer and exporter of ATX Gaming case, m-ATX
                case, gaming power supply with RGB/80plus/85plus Bronze/89plus
                gold.{" "}
              </p>
          </div>
        </div>
      </div>





      <div class="hero min-h-screen  ">
        <div class="hero-overlay bg-opacity-60"></div>

        <div class="hero-content text-center text-neutral-content  ">
          <div class="">
            <h1 class="mb-5 text-5xl font-bold">Company Profile</h1>
            <ol className="text-xl ">
              <li className="font-bold mb-3">
                Business Type:{" "}
                <span className="text-yellow-500">
                  Manufacturer/Factory & Trading Company
                </span>{" "}
              </li>
              <li className="font-bold mb-3">
                Main Products:{" "}
                <span className="text-yellow-500">
                  Computer Case , Gaming Computer Case , Power Supply
                </span>{" "}
              </li>
              <li className="font-bold mb-3">
                Number of Employees: <span className="text-yellow-500">203</span>{" "}
              </li>
              <li className="font-bold mb-3">
                Year of Establishment: <span className="text-yellow-500">2016-07-26</span>{" "}
              </li>
              <li className="font-bold mb-3">
                Plant Area: <span className="text-yellow-500">2500 square meters</span>{" "}
              </li>
              <li className="font-bold mb-3">
                Average Lead Time:{" "}
                <span className="text-yellow-500">
                  Peak Season Lead Time: one month , Off Season Lead Time: one
                  month
                </span>{" "}
              </li>
            </ol>



            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;