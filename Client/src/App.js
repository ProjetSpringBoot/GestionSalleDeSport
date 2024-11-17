import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './ClientPages/Home';
import ContactPage from './ClientPages/ContactPage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactPage" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
