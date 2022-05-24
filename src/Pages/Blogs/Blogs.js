import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold bg-gray-400 w-fit mx-auto p-4 mt-10">
          Question & Answering Section
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12  rounded-2xl p-5 ">
          <div className="w-full shadow-xl pb-5">
            <div>
              <h2 className="bg-black text-orange-500 text-2xl font-bold mb-5 p-3">
              How will you improve the performance of a React Application?
              </h2>
            </div>
            <div>
              <img
                src="https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/0e6ff/React.jpg"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mt-5">Improving Performance on React App :</h3>
              <ul className="font-serif mt-5">
                <li>Avoid inline functions as much as possible.</li>
                <li> Remember that Immutability is the key to avoid unnecessary re-renders.</li>
                <li>Always render hidden components like Modals and Dropdowns conditionally.</li>
                <li>Always call multiple APIs parallelly.</li>
                <li>Keeping component state local where necessary.</li>
                <li>Code-splitting in React using dynamic import()</li>
                <li>Windowing or list virtualization in React.</li>
              </ul>

              
            </div>
          </div>

          <div className="w-full shadow-xl pb-5">
            <div className="bg-black text-orange-500 text-2xl font-bold mb-5 p-3">
            What are the different ways to manage a state in a React application?
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/690102/regular_800x320_image_0-1967657e3078be54d78ccc4d57eae106-f763757d0bd43e58ff9976083b458547.png"
                alt=""
              />
            </div>
            <div>
            <h3 className="text-2xl font-bold mt-5">ways to manage a state in a React application :</h3>
            <ul className="font-serif mt-5 p-5">
                <li className="mb-3"> <p> <span className="text-xl font-bold">Local state:</span> Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.</p> </li>
                <li className="mb-3"><p> <span className="text-xl font-bold">Global (UI) state :</span> Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p> </li>
                <li className="mb-3"><p> <span className="text-xl font-bold">Server state :</span> Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</p> </li>
                <li className="mb-3"><p> <span className="text-xl font-bold">URL state :</span>  Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</p> </li>
            
              </ul>
            </div>
          </div>

          <div className="w-full shadow-xl pb-5">
            <div>
              <h2 className="bg-black text-orange-500 text-2xl font-bold mb-5 p-3">
              How does prototypical inheritance work?
              </h2>
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://www.cronj.com/blog/wp-content/uploads/inheritance.png.webp"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mt-5">prototypical inheritance :</h3>
              <p className="text-lg p-5">JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.</p>
            </div>
          </div>

          <div className="w-full shadow-xl pb-5">
            <div>
              <h2 className="bg-black text-orange-500 text-2xl font-bold mb-5 p-3">
              Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts ?
              </h2>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--gRcOIbcX--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/87imm1ntaiou8jjzp7ap.jpg"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mt-5"> Jwt:</h3>
              <p>
                JWT, or JSON Web Token, is an open standard used to share
                security information between two parties — a client and a
                server. Each JWT contains encoded JSON objects, including a set
                of claims. JWTs are signed using a cryptographic algorithm to
                ensure that the claims cannot be altered after the token is
                issued.
              </p>

              <h3 className="text-2xl font-bold mt-5">How does JWT works :</h3>
              <p>
                JWTs differ from other web tokens in that they contain a set of
                claims. Claims are used to transmit information between two
                parties. What these claims are depends on the use case at hand.
                For example, a claim may assert who issued the token, how long
                it is valid for, or what permissions the client has been
                granted. A JWT is a string made up of three parts, separated by
                dots (.), and serialized using base64. In the most common
                serialization format, compact serialization, the JWT looks
                something like this: xxxxx.yyyyy.zzzzz.
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl pb-5">
            <div>
              <h2 className="bg-black text-orange-500 text-2xl font-bold mb-5 p-3">
              You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
              </h2>
            </div>
            <div>
              <img
                src="https://cdn.educba.com/academy/wp-content/uploads/2019/09/Arrays-in-JavaScript.png.webp"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mt-5"> Jwt:</h3>
              <p>
                JWT, or JSON Web Token, is an open standard used to share
                security information between two parties — a client and a
                server. Each JWT contains encoded JSON objects, including a set
                of claims. JWTs are signed using a cryptographic algorithm to
                ensure that the claims cannot be altered after the token is
                issued.
              </p>

              <h3 className="text-2xl font-bold mt-5">How does JWT works :</h3>
              <p>
                JWTs differ from other web tokens in that they contain a set of
                claims. Claims are used to transmit information between two
                parties. What these claims are depends on the use case at hand.
                For example, a claim may assert who issued the token, how long
                it is valid for, or what permissions the client has been
                granted. A JWT is a string made up of three parts, separated by
                dots (.), and serialized using base64. In the most common
                serialization format, compact serialization, the JWT looks
                something like this: xxxxx.yyyyy.zzzzz.
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl pb-5">
            <div>
              <h2 className="bg-black text-orange-500 text-2xl font-bold mb-5 p-3">
              What is a unit test? Why should write unit tests?
              </h2>
            </div>
            <div>
              <img
                src="https://ucarecdn.com/39483ff6-4269-400d-bca7-1dd059c31c02/-/resize/700/"
                alt=""
              />
            </div>
            <div className="p-5">
              <h3 className="text-2xl font-bold mt-5"> unit test :</h3>
              <p>
              The prime objective of any software project is to get a high-quality output while reducing the cost and the time required for completing the project. To achieve that companies subject software product to mainly four levels of testing. Unit testing is the first level of testing in Software Testing. Throughout this article, we will explore what unit test is in detail. 
              </p>

              <h3 className="text-2xl font-bold mt-5">unit tests written for :</h3>
              <p>
              Developers write unit tests so they can repeatedly run them and check that no bugs have been introduced. If unit tests are slow, developers are more likely to skip running them on their own machines. One slow test won't make a significant difference; add one thousand more and we're surely stuck waiting for a while.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
