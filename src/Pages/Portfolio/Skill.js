import React from "react";

const Skill = () => {
  return (
    <div className="flex gap-10 justify-items-center justify-center my-10">
        <div class="overflow-x-auto w-1/2">
         <h2 className="text-3xl bg-green-300 font-bold py-3">Skills</h2>
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>NO.</th>
            <th>Name</th>
            <th>Rattings</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          <tr>
            <th> 1 </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?t=st=1653562660~exp=1653563260~hmac=2db327cde15e9e602b54cc9d7a5ed44108657cd12d77348f9c257d8076c1c83a&w=900"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">HTML</div>
                  
                </div>
              </div>
            </td>
            <td>
              <div class="rating bg-gray-200 shadow-lg p-3 rounded-md">
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input
                  type="radio"
                  name="rating-1"
                  class="mask mask-star"
                  
                />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" checked/>
              </div>
            </td>
          </tr>
          {/* <!-- row 2 --> */}
          <tr>
            <th>2</th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="https://img.freepik.com/free-vector/css-word-lettering-typography-design-illustration-with-line-icons-ornaments-orange_9233-187.jpg?w=900"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">CSS</div>
                  
                </div>
              </div>
            </td>
            <td>
            <div class="rating bg-gray-200 shadow-lg p-3 rounded-md">
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input
                  type="radio"
                  name="rating-1"
                  class="mask mask-star"
                  
                />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" checked/>
              </div>
            </td>
          </tr>
          {/* <!-- row 3 --> */}
          <tr>
            <th>3</th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="https://bestprogrammer.ru/wp-content/uploads/2021/08/CHto-novogo-v-Bootstrap-5-696x400.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Bootstrap</div>
                  
                </div>
              </div>
            </td>
            <td>
            <div class="rating bg-gray-200 shadow-lg p-3 rounded-md">
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input
                  type="radio"
                  name="rating-1"
                  class="mask mask-star"
                  
                />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" checked/>
              </div>
            </td>
          </tr>
          {/* <!-- row 4 --> */}
          <tr>
            <th>4</th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="https://www.wizcase.com/wp-content/uploads/2021/11/tailwind-logo.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Tailwind</div>
                  
                </div>
              </div>
            </td>
            <td>
            <div class="rating bg-gray-200 shadow-lg p-3 rounded-md">
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input
                  type="radio"
                  name="rating-1"
                  class="mask mask-star"
                  
                />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" checked/>
              </div>
            </td>
          </tr>
          {/* <!-- row 5 --> */}
          <tr>
            <th>5</th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="https://www.globalvoxinc.com/wp-content/uploads/2021/09/javascript.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Javascript</div>
                  
                </div>
              </div>
            </td>
            <td>
            <div class="rating bg-gray-200 shadow-lg p-3 rounded-md">
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input
                  type="radio"
                  name="rating-1"
                  class="mask mask-star"
                  
                />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" checked/>
              </div>
            </td>
          </tr>
          {/* <!-- row 6 --> */}
          <tr>
            <th>6</th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">React JS</div>
                  
                </div>
              </div>
            </td>
            <td>
            <div class="rating bg-gray-200 shadow-lg p-3 rounded-md">
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input
                  type="radio"
                  name="rating-1"
                  class="mask mask-star"
                  
                />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" checked/>
              </div>
            </td>
          </tr>
          {/* <!-- row 7 --> */}
          <tr>
            <th>7</th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="https://www.howtogeek.com/wp-content/uploads/csit/2019/07/2350564e.png?width=1198&trim=1,1&bg-color=000&pad=1,1"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Node JS</div>
                  
                </div>
              </div>
            </td>
            <td>
            <div class="rating bg-gray-200 shadow-lg p-3 rounded-md">
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input
                  type="radio"
                  name="rating-1"
                  class="mask mask-star"
                  
                />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" checked />
                <input type="radio" name="rating-1" class="mask mask-star" />
              </div>
            </td>
          </tr>
          {/* <!-- row 8 --> */}
          <tr>
            <th>8</th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="https://www.howtogeek.com/wp-content/uploads/csit/2021/07/f5932bc2.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">MongoDB</div>
                  
                </div>
              </div>
            </td>
            <td>
            <div class="rating bg-gray-200 shadow-lg p-3 rounded-md">
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input
                  type="radio"
                  name="rating-1"
                  class="mask mask-star"
                  
                />
                <input type="radio" name="rating-1" class="mask mask-star"checked />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>


    <div class="overflow-x-auto ">
         <h2 className="text-3xl bg-green-300 font-bold py-3">Interest</h2>
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            
            <th>Name</th>
           
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          <tr>
            
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="https://cdn-media-1.freecodecamp.org/images/1*XthWUtD_NU-VJ7ESA2qX3A.jpeg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Coding</div>
                  
                </div>
              </div>
            </td>
            
          </tr>
          {/* <!-- row 2 --> */}
          <tr>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="https://fashionblitzs.com/wp-content/uploads/2020/12/books.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Reading Book</div>
                  
                </div>
              </div>
            </td>
            
          </tr>
          {/* <!-- row 3 --> */}
          <tr>
            
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/UploadedImages/167e255a-8759-4a2f-92f6-591d6d8f7afb/Catalyst-pictures/Text-body-images/april2021/Picture_2_Travel.jpeg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Travel</div>
                  
                </div>
              </div>
            </td>
            
          </tr>
          {/* <!-- row 4 --> */}
          <tr>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="https://ec.europa.eu/eurostat/documents/6921402/9104237/Shutterstock_Lisa_Kolbasa.png/f988f8b6-4138-4a91-9761-885bacab0ce2?t=1533725002000"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Sports</div>
                  
                </div>
              </div>
            </td>
            
          </tr>
          <tr>
            
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="https://www.lifewire.com/thmb/BBDkz534VdaelQwLpsHDu1JTKyI=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/best-online-music-sites-for-downloading-songs-2438415-e0a6579966ac42c7ab933f1996b9a9e7.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Music</div>
                  
                </div>
              </div>
            </td>
           </tr>
          <tr>
            
            
            
          </tr>
          <tr>
           
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="https://bikeindia.in/wp-content/uploads/2020/10/Riding-schools-web1.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Bike Ride</div>
                  
                </div>
              </div>
            </td>
            
          </tr>
          
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Skill;
