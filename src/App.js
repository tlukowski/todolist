import './App.css';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

export default function App() {
  const sliders = [
    {
      title:"Easy Time Management",
      description:"With management based on priority and daily tasks, it will give you convenience in managing and determining the tasks that must be done first",
      image:"./../assets/img/slide1.svg'",
    },
    {
      title:"Increase Work Effectiveness",
      description:"Time management and the determination of more important tasks will give your job statistics better and always improve",
      image:"./../img/slide2.svg",
    },
    {
      title:"Reminder Notification",
      description:"The advantage of this application is that it also provides reminders for you so you don't forget to keep doing your assignments well and according to the time you have set",
      image:"./../img/slide3.svg",
    }
  ]
  return (
    <div className='max-w-[375px] mx-auto px-4 bg-slate-500 pb-10 pt-6'>
    <Router>
      <Routes>        
          <Route exact index element={<Home props={sliders}/>} />
          <Route exact path="/login" element={<Login/>} />          
          <Route exact path="/register" element={<Register />} />          
      </Routes>
    </Router>
    </div>
  )
}