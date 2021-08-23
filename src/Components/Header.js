import React, { Component } from 'react'
import { Nav, Navbar} from 'react-bootstrap';
import { Route, Switch, Link, NavLink} from 'react-router-dom';


const LOGO = "assets/img/PBX.gif";


export default class Header extends React.Component {
  render() {
    return (
      <>

      <Navbar className="goldenBack" variant="dark" expand="lg">
        <Navbar.Brand href="./">
          <h1 style={{ color: '#fff', fontSize: "18px"}}>
          <img src={ LOGO } height="50" />
            PolarBear X Crypto Copytrade
            </h1>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink to="./" style={{ color: '#fff' }}><strong><i class="fas fa-home"></i> Home</strong></NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="copytrade" style={{ color: '#fff' }}><strong><i class="fas fa-users"></i> Copytrade</strong></NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="dex" style={{ color: '#fff' }}><strong><i class="fas fa-chart-area"></i> DEX (For Fund Manager)</strong></NavLink>
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

          </>
    );

  }
}