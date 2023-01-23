import './App.css';
import { Route, Routes } from 'react-router-dom';
import KidsPage from './pages/KidsPage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import NavBar from './components/NavBar';
import CartPage from './pages/ShoppingCart';

function App() {
  return(
  <>
    <NavBar />;
    <Routes>
      <Route path="/" element={<MenPage />} />
      <Route path="/women" element={<WomenPage />} />
      <Route path="/kids" element={<KidsPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  </>

  )
}

export default App;
