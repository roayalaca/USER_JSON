import './App.css'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import UserDetail from './pages/UserDetail';
import Navbar from './components/Navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import MainLayout from './components/MainLayout';
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './pages/Login';
import Balance from './pages/Balance';





function App() {

  const [ info, setInfo ] = useState([])
  const [form, setForm] =useState(false)



  return (
    <HashRouter>
       <div className='App'>


          
          <Navbar/>
          <Routes>

          | <Route 
            path="/login" 
            element={<Login/>} 
            /> 

            
            <Route
                path="/login/userDetail/Balance/:_id"
                element= { <Balance/> }
                >
            </Route>

           {/* //Protected Routes */}

         
            <Route element={ <ProtectedRoutes/> }>

              <Route
              element= { <MainLayout/> }
              >
                <Route
                path="/login/UserDetail/:_id"
                element= { <UserDetail/> }
                >
                </Route>



              </Route>

            </Route>

           

          
              

          </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
