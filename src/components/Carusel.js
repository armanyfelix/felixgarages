import React from 'react';
import { Carousel } from 'react-bootstrap';
import './styles.css'

const Carusel = () => {

  return (
    <Carousel className=" mb-5 border-0" fade>
      <Carousel.Item>
        <img className="d-block w-100" src="/img/mustang.jpg" alt="mustang" />
        <Carousel.Caption>
          <h1 className="phrase">Arregla y modifica tu auto con la mejor calidad</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/img/carrro.jpg" alt="3 carros" />
        <Carousel.Caption>
          <h1 className="phrase">El mejor sevicio para tu auto en Tijuana</h1>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Carusel;