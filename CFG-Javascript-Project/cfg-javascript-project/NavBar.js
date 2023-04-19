import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar bg="danger" expand="lg" className='Navbar'>
      <Container id='container'>
        <Navbar.Brand href="#home" id="basic-nav-dropdown">SoundWaves</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" id="basic-nav-dropdown">Home</Nav.Link>
            <Nav.Link href="#link" id="basic-nav-dropdown">Line Up</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown" bg="danger">
              <NavDropdown.Item href="#action/3.1" id="basic-nav-dropdown">Tickets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" id="basic-nav-dropdown">
                Accessibility
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;



/*import React, {useState} from 'react'
import {Link} from 'react-router-dom';

const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = ()=> setClick(false);
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link> to ='/' className= 'navbar-logo'
            <i className = 'fab fa-typo3' />
            </Link>
            <div className ='menu-icon' onClick = {handleClick}>
                <i className = { click? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className= {click? 'nav-menu active': 'nav-menu'}>
                <li className ='nav-item'>
                    <Link to ='/' className= 'nav-links' onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className ='nav-item'>
                    <Link to ='/' className= 'nav-links' onClick={closeMobileMenu}>Line Up</Link>
                </li>
                <li className ='nav-item'>
                    <Link to ='/' className= 'nav-links' onClick={closeMobileMenu}>Tickets</Link>
                </li>
                <li className ='nav-item'>
                    <Link to ='/' className= 'nav-links' onClick={closeMobileMenu}>Information</Link>
                </li>
            </ul>
        </div>
    </nav>
    
  )
}

export default NavBar*/
