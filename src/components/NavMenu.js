import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const NavMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>Menu</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="nav-links">

            <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/transaction-history">
            <Nav.Link>Transaction History</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/transactions/new">
            <Nav.Link>Add Transaction</Nav.Link>
            </LinkContainer>
        </Nav>
        
       </Navbar.Collapse>
    </Navbar>
    )
}

export default NavMenu;
