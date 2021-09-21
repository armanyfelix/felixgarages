import React from 'react'
import { Nav } from 'react-bootstrap';

function Footer() {
    return (
        <>
            <div className="bg-dark mt-5">
                <Nav className=" mr-5" >
                    <Nav.Link href="#home" className="text-white">Inicio</Nav.Link>
                    <Nav.Link href="#servicios" className="text-white">Servicios</Nav.Link>
                    <Nav.Link href="#nosotros" className="text-white">Nosotros</Nav.Link>
                    <Nav.Link href="#galeria" className="text-white">Galeria</Nav.Link>
                    <Nav.Link href="#contacto" className="text-white">Contacto</Nav.Link>
                </Nav>
            </div>
            
        </>
    )
}

export default Footer;




