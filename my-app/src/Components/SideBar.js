import React from 'react'
import {Nav, Image} from 'react-bootstrap';
import './CSS/Dashboard.css';


const SideBar = (props) => {
    return (
        <Nav className="col-sm-2 d-inline d-md-block sidebar" activeKey="/home">
            <div className="sidebar-sticky min-vh-100 ">
                <Image className="avatarBig liAvatar" src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" roundedCircle/>
                <Nav.Item className= "d-flex justify-content-center liNavLink">
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-flex justify-content-center liNavLink">
                    <Nav.Link eventKey="link-1">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-flex justify-content-center liNavLink">
                    <Nav.Link eventKey="link-2">Client</Nav.Link>
                </Nav.Item>
            </div>
        </Nav>
    )
}

export default SideBar;

