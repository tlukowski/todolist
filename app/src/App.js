import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';

export default function App() {
  return (
    <div className='w-[375px] mx-auto py-16 border-4 border-black rounded-2xl mt-5'>
    <Router>
      <Routes>        
          <Route exact index element={<Home />} />
          <Route exact path="/register" element={<Register />} />          
      </Routes>
    </Router>
    </div>
  )
}