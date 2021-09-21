import { useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import SimpleMap from './map';
import dotenv from 'dotenv';
dotenv.config();



function Contacto() {
    const [status, setStatus] = useState("Enviar Mensaje");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Enviando...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch(`http://localhost:3001/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details),
        });
        setStatus("Enviar");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <>
            <div className="text-center m-2">
                <h1>Contáctanos</h1>
                <h4>Encuentranós en nuestra dirección o comunicate con nosotros. Te atenderemos lo antes posible.</h4>

            </div>
            <div className="mb-5">
                <SimpleMap />
            </div>

            <Container id="contacto" className=" mx-auto">
                <Row >
                    <Col className="bg-secondary contact__info text-white px-5 my-5 py-5 mx-auto flex" style={{ margin: '0px -40px' }}>
                        <div className="d-flex justify-content-start m-3 align-items-center">
                            <img width={'50px'} src="/img/icons/marcador-de-posicion.png" alt="direccion" />
                            <span className="ml-4">Margaritas 576, Lomas del Matamoros, 22206 Tijuana, B.C.</span>
                        </div>
                        <div className="d-flex justify-content-start m-3 align-items-center ">
                            <img width={'50px'} src="/img/icons/telefono.png" alt="telefono" />
                            <span className="ml-4">+52 (668) 113-62-92</span>
                        </div>
                        <div className="d-flex justify-content-start m-3 align-items-center">
                            <img width={'50px'} src="/img/icons/correo.png" alt="correo" />
                            <span className="ml-4">alan5fv83@gmail.com</span>
                        </div>
                        <div className="d-flex justify-content-start m-3 align-items-center">
                            <img width={'50px'} src="/img/icons/calendario.png" alt="horario" />
                            <span className="ml-4">Horario: 8:30 AM a 5:30 PM</span>
                        </div>
                    </Col>
                    <Col className="px-4 mt-5 mb-3 ">
                        <h2 className="text-center">Deja tu mensaje</h2>
                        <Form onSubmit={handleSubmit} className="mx-4">
                            <Form.Group>
                                <Form.Label htmlFor="name">Nombre:</Form.Label>
                                <Form.Control type="text" id="name" placeholder="Tu nombre" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="email">Correo:</Form.Label>
                                <Form.Control type="email" id="email" placeholder="Tu correo" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="message">Mensaje:</Form.Label>
                                <Form.Control id="message" placeholder="En que podemos ayudarte" required />
                            </Form.Group>
                            <div className="text-center mt-3">
                                <button variant="secondary" type="submit" className="btn btn-secondary">{status}</button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Contacto;
