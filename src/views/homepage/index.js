import React from 'react'
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap'
import './assets/stylesheets/index.scss'

const HomePage = () => (
  <div>
    <Navbar inverse className="navbar-default navbar-static-top navbar-semi-transparent">
      <Navbar.Header>
        <Navbar.Brand>
          <span className="navbar-title">Kingston</span>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Link Right</NavItem>
          <NavItem eventKey={2} href="#">Link Right</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default HomePage
