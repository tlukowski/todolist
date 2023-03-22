import banner from './img/main.svg';
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <div className='w-[375px] mx-auto py-16 border-4 border-black rounded-2xl mt-5'>
      <div className='flex flex-col items-center'>
        <img src={banner} alt='' className='max-w-full px-16'></img>
        <div className='mt-24'>
          <h2 class="text-2xl font-semibold text-center max-w-[240px]">Task Management & 
          To-Do List</h2>
          <p className="font-normal text-sm text-[#6E6A7C] text-center mt-5 max-w-[266px] 
          ">This productive tool is designed to help
              you better manage your task 
              project-wise conveniently!</p>
          <div className='mt-10'>
            <button className="relative group bg-primary text-white py-[14px] w-full block rounded-[14px] hover:bg-violet-900 transition-colors duration-300]">
             <Link to='/register'> Let's Start </Link>
            <svg className='absolute top-1/2 right-8 -translate-y-1/2 group-hover:right-6 transition-all duration-300' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.835 12.0066L10.8366 12.3607C10.8487 13.7652 10.9334 15.0183 11.0794 15.8124C11.0794 15.8267 11.2387 16.6143 11.3401 16.8764C11.4994 17.2554 11.7874 17.577 12.1485 17.7808C12.4376 17.9262 12.7408 18 13.0583 18C13.3078 17.9884 13.7194 17.8629 14.0131 17.7576L14.2572 17.664C15.8739 17.0218 18.9644 14.9234 20.148 13.6402L20.2353 13.5505L20.6247 13.1302C20.8702 12.8085 21 12.4153 21 11.9923C21 11.6134 20.8844 11.2344 20.6531 10.9282C20.5839 10.829 20.4723 10.7017 20.3731 10.5942L19.994 10.1974C18.6895 8.87572 15.8652 7.02183 14.4012 6.40756C14.4012 6.39435 13.4914 6.01432 13.0583 6H13.0005C12.3361 6 11.7154 6.37892 11.3979 6.99137C11.3112 7.1588 11.228 7.48678 11.1648 7.77483L11.051 8.31871C10.9212 9.19332 10.835 10.535 10.835 12.0066ZM4.50325 10.4817C3.67308 10.4817 3 11.1613 3 11.9996C3 12.8378 3.67308 13.5175 4.50325 13.5175L8.20248 13.1903C8.85375 13.1903 9.38174 12.6583 9.38174 11.9996C9.38174 11.3419 8.85375 10.8088 8.20248 10.8088L4.50325 10.4817Z" fill="white"/>
            </svg>

            </button>
          </div>
        </div>
      </div>
    </div>
  )
}