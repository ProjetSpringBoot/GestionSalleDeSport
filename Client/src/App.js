import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ClientHome from './ClientPages/ClientHome';
import CoachHome from './CoachsPages/CoachHome';

import ContactPage from './ClientPages/ContactPage'; 
import Activity from './ClientPages/Activity';
import LoginClient from './ClientPages/LoginClient';
import LoginCoach from './CoachsPages/LoginCoach';
import SignUpCoachs from './CoachsPages/SignUpCoachs';
import SignupClient from './ClientPages/SignupClient';
import ProductPage from './Components/ProductPage';
import ShoppingCart from './Components/ShoppingCart';
import ListeCoachs from './Components/ListeCoachs';
import ProfilCoach from './Components/ProfilCoach';
import Join from './Components/Join';
import Coach from './CoachsPages/HomeCoach';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ClientHome" />} />
        <Route path="/ClientHome" element={<ClientHome />} />
        <Route path="/CoachHome" element={<CoachHome />} />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="/Activity" element={<Activity />} />
        <Route path="/LoginClient" element={<LoginClient />} />
        <Route path="/LoginCoach" element={<LoginCoach />} />
        <Route path="/SignupClient" element={<SignupClient />} />
        <Route path="/SignUpCoachs" element={<SignUpCoachs />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/ListeCoachs" element={<ListeCoachs />} />
        <Route path="/ProfilCoach" element={<ProfilCoach />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/Coach" element={<Coach />} />


        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
