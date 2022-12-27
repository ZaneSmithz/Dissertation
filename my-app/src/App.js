import Dashboard from './Pages/Dashboard';
import ClientManager from './Pages/ClientManager';
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import SideBar from './Components/SideBar';
import React from 'react';

const App = () => {

  return (
    <Router>
      <Container>
        <Row>
          <Col id="sidebar-wrapper" className="mx-2" md={4} >
            <SideBar/>
          </Col>
          <Col  className="g-0" md={8}>
                <div className="containerColour">
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/manager" element={<ClientManager/>}/>
          </Routes>
          </div>
          </Col>
        </Row>
      </Container>
     </Router>
  );
}

export default App;
