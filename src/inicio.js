import Servicios from './components/servicios';
import Nosotros from './components/nosotros';
import Contacto from './components/contacto';
import Carusel from './components/Carusel';

function Inicio() {
    return (
        <div>
            <Carusel />
            <Servicios />
            <Nosotros />
            <Contacto />
        </div>
    )
}

export default Inicio
