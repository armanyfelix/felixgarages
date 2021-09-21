
import React from 'react';
import './styles.css';

function Nosotros() {
    return (
        <section id="nosotros" className="mt-5">
            <div className=" nosotros">
                <h1>Nosotros</h1>

                <img src="img/nosotros.jpg" className="w-100" alt="poniendo defensa" />
            </div>

            <div className=" centered text-center">
                <h3>Nuestra calidad y tiempos de entrega nos a dado la confianza de nuestros clientes</h3>
                <p>
                    La responsabilidad nos ha llevado a un nivel de confianza único con cada cliente ya que la atención es directa y clara.
                    Contamos con un equipo de profesionales sumamente comprometido y enfocado.
                    Nos distinguimos sobre todos los talleres en calidad y servicio, aprendimos los estándares mas exigentes
                    del ramo y ahora los aplicamos de forma particular siempre compitiendo con la calidad de estados unidos.
                    Contamos con 4 niveles diferentes de calidad para así encontrar el precio-calidad que mejor le convenga.
                    Nos interesa orientar a nuestros clientes de manera que consuman sólo lo que necesitan
                    La entrega de su auto en tiempo y forma es importante para nosotros.
                </p>
            </div>

        </section>
    )
}

export default Nosotros;
