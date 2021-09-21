import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ComparisonSlider } from 'react-comparison-slider';
import './styles.css'




function Servicios() {

    return (
        <div id="servicios" className="overflow-hidden">
            <div className="centered text-center ">
                <h1 className="">Servicios</h1>
                <p className="mt-3  fs-5">Nuestro personal está altamente calificado, combinamos experiencia y profesionalismo, contamos con un amplio equipo de herramientas tales como bancos de medición, herramientas hidráulicas, todos los tipos de soldadura, laboratorio de colores cabina de pintura. Todo esto y más garantizan excelentes acabados.</p>
                <Link to="/galeria">
                    <button className="py-3 px-5 visita__galeria">
                        Visita la galeria
                    </button>
                </Link>
            </div>
            <div className=" comparison">
                <ComparisonSlider
                    defaultValue={50}
                    itemOne={<img src="/img/before.jpeg" alt="before" />}
                    itemTwo={<img src="/img/after.jpeg" alt="after" />}
                    aspectRatio={320 / 239}
                    orientation="horizontal"
                />
            </div>
            <Container>
                <Row className="my-5 py-5 align-items-center text-center">
                    <Col>
                        <div>
                            <h2 className="fs-1">Pintura</h2>
                            <p className=" fs-5">Utilizamos cualquier tipo de pintura, trabajos por partes o carroceria completa dependiendo de las necesidades del cliente.</p>
                        </div>
                    </Col>
                    <Col>
                        <img className="service" src="/img/paint.png" alt="paint car" />
                    </Col>
                </Row>

                <Row className="my-5 py-5 align-items-center text-center">
                    <Col>
                        <img className="service" src="/img/wrapcar.png" alt="wrap car" />
                    </Col>
                    <Col>
                        <div>
                            <h2 className="fs-1">Wrapping</h2>
                            <p className=" fs-5">Colocamos vinilos de la mejor calidad para que puedas darle un toque especial al color de tu auto y se vea unico.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="my-5 py-5 align-items-center text-center">
                    <Col>
                        <div>
                            <h2 className="fs-1">Carroceria</h2>
                            <p className=" fs-5">Hacemos todo tipo de repaciones a tu carroceria. Arreglamos choques, colocamos piezas, enderezamos el chasis y agregamos injertos para autos muy dañados.</p>
                        </div>
                    </Col>
                    <Col>
                        <img className="service" src="/img/carroceria.png" alt="carroceria png" />
                    </Col>
                </Row>
                <Row className="mt-5 pt-5 align-items-center text-center">
                    <Col>
                        <img className="serviceMa" src="/img/mantenimiento.png" alt="mantenimiento" />
                    </Col>
                    <Col>
                        <div>
                            <h2 className="fs-1">Mantenimiento</h2>
                            <p className=" fs-5">Tambien hacemos mecanica general para que tu auto este en las mejores condiciones.</p>

                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Servicios
