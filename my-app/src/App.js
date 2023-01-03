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

const App = () => {

  return (
    <Router>
          <Routes>
            <Route element={<WithoutNav/>}>
              <Route path="/login" element={<Login/>}/>
            </Route>
            <Route path="/" element={<WithNav/>}>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/manager" element={<ClientManager/>}/>
            </Route>
          </Routes>   

     </Router>
  );
}

export default App;
