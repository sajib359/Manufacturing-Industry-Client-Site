
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Blogs from './Pages/Blogs/Blogs';
import Portfolio from './Pages/Portfolio/Portfolio';
import Login from './Pages/User/Login';
import Navbar from './Pages/Shared/Navbar';
import Reviews from './Pages/Reviews/Reviews';
import Register from './Pages/User/Register';
import NotFound from './Pages/NotFound/NotFound';

import AddProduct from './Pages/AddProduct/AddProduct';
import RequireAuth from './Pages/Shared/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyReview from './Pages/Dashboard/MyReview';
import RequireAdmin from './Pages/Shared/RequireAdmin';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import ManageUsers from './Pages/Dashboard/ManageUsers';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import MyProfile from './Pages/Dashboard/MyProfile';
import Order from './Pages/Products/Order';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
        <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route> 
        <Route path='/order/:productId'element={<Order></Order>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="addproduct"
            element={
              // <RequireAdmin>
                <AddProduct></AddProduct>
              // </RequireAdmin>
            }
          ></Route>
          <Route
            path="manage"
            element={
              // <RequireAdmin>
                <ManageOrder></ManageOrder>
              // {/* </RequireAdmin> */}
            }
          ></Route>
          <Route
            path="users"
            element={
              // <RequireAdmin>
                <ManageUsers></ManageUsers>
              // {/* </RequireAdmin> */}
            }
          ></Route>
          <Route
            path="manageproduct"
            element={<ManageProduct></ManageProduct>}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
