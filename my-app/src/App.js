import Dashboard from './Pages/Dashboard';
import ClientManager from './Pages/ClientManager';
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import SideBar from './Components/SideBar';
import React from 'react';
import Login from './Pages/Login';
import WithoutNav from './WithoutNav.';
import WithNav from './WithNav';
import { AuthProvider } from './Contexts/AuthContext';
import PrivateRoutes from './Components/PrivateRoutes';

const App = () => {
  

  const currentUser = false;

  return (
    <Router>
      <AuthProvider>
          <Routes>
            <Route element={<WithoutNav/>}>
              <Route path="/login" element={<Login/>}/>
            </Route>
            <Route element = {<PrivateRoutes />} >
              <Route path="/" element={ <WithNav/>}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/manager" element={<ClientManager/>}/>
              </Route>
            </Route>
          </Routes>   
        </AuthProvider>
    </Router>
     
  );
}

export default App;
