import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Home';
import Header from './components/Header';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Footer from './components/Footer';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/product/:id' element={<SingleProduct />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<CheckOut />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
