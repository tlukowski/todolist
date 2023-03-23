import './App.css';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';

export default function App() {
  return (
    <>
    <Router>
      <Routes>        
          <Route exact index element={<Home />} />
          <Route exact path="/register" element={<Register />} />          
      </Routes>
    </Router>
    </>
  )
}