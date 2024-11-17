import './App.css';
import { Routes, Route , BrowserRouter} from 'react-router-dom';
import Home from './ClientPages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
