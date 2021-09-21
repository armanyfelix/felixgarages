import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './styles.css'

const NavBar = () => {

    return (
        <Navbar style={{ background: '#000' }} expand="lg" sticky="top" className="shadow w-full d-flex justify-content-between">
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                    <img src="/img/logo_light.svg" width="200" className="logo" alt="Logo principal" />
                    </Link>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" width="10px"  style={{ color: '#666666', background: '#262626', padding: '7px'}} />
                <Navbar.Collapse id="navbarScroll">
                    <Nav navbarScroll >
                        <Link to="/" className="text-white navBtn text-center text-decoration-none p-2">Inicio</Link>
                        <Link to="/Galeria" className="p-2 text-center text-decoration-none navBtn text-white">Galeria</Link>
                        <Nav.Link href="/#servicios" className="p-2 text-center text-white navBtn hover-overlay">Servicios</Nav.Link>
                        <Nav.Link href="/#nosotros" className="p-2 text-center text-white navBtn">Nosotros</Nav.Link>
                        <Nav.Link href="/#contacto" className="p-2 text-center text-white navBtn">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
        </Navbar>
    );
}

export default NavBar;