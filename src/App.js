
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';

import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import LoginAuth from './Pages/Auth/Login/LoginAuth';
import SignUp from './Pages/Auth/SignUp/SignUp';
import RequireAuth from './Pages/Auth/RequireAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
function App() {
  return (
    <div className='max-w-7xl mx-auto'>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='home' element={<Home></Home>}></Route>
      <Route path='about' element={<About></About>}></Route>
      <Route path='signup' element={<SignUp></SignUp>}></Route>
      <Route path='loginauth' element={<LoginAuth></LoginAuth>}></Route>
      <Route path='/appointment' element={
        <RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>
      }></Route>
      <Route path='/dashboard' element={
        <RequireAuth>
         <Dashboard></Dashboard>
        </RequireAuth>
      }> 
      
      <Route index element={<MyAppointment></MyAppointment>}></Route>
      <Route path='myreview' element={<MyReview></MyReview>}></Route>
      
       </Route>
    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
