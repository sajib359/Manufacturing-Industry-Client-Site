
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
import MyProfile from './Pages/User/MyProfile';
import ViewProduct from './Pages/Products/ViewProduct';
import UpdateProduct from './Pages/Products/UpdateProduct';
import AddProduct from './Pages/Addproduct/AddProduct';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path="/update/:id" element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path="/view/:id" element={<ViewProduct></ViewProduct>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
        <Route path='/profile' element={<MyProfile></MyProfile>}></Route> 
        <Route path='/profile' element={<AddProduct></AddProduct>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
