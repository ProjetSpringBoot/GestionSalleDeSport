import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './ClientPages/Home';
import ContactPage from './ClientPages/ContactPage'; 
import Activity from './ClientPages/Activity';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ProductPage from './Components/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="/Activity" element={<Activity />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ProductPage" element={<ProductPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
