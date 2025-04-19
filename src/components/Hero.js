import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Zoom } from 'react-awesome-reveal';
import { useParallax } from 'react-scroll-parallax';
import { useState, useEffect } from 'react';

import imgBackground01 from '../images/img-destino-01.jpg';
import imgBackground02 from '../images/img-destino-02.jpg';
import imgBackground03 from '../images/img-destino-03.jpg';
import imgBackground04 from '../images/img-destino-04.jpg';
import imgBackground05 from '../images/img-destino-05.jpg';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const backgrounds = [imgBackground01, imgBackground02, imgBackground03, imgBackground04, imgBackground05];
    // Cambia la imagen de fondo cada 5 segundos

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % backgrounds.length);
        }, 5000); // Cambia la imagen cada 5 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }
    , [backgrounds.length]);

    const backgroundImage = `url(${backgrounds[currentSlide]})`;

    const { ref } = useParallax({ speed: 10 });
    return (
        <section className="hero--img" style={{backgroundImage}}>
            <div className="hero__overlay hero__overlay--black"></div>
            <Container>
                <Row>
                    <Col>
                        <div ref={ref} className="hero__content">
                            <div className='hero__content__header'>
                                <Zoom triggerOnce cascade>
                                    {/* <h4 className="text--lead text-white">Tu mejor opción para viajes seguros, cómodos y puntuales</h4> */}
                                    <h1 className="text--title text-white">Real Estate 5207 Sale Ave
                                    </h1>
                                    {/* <h4 className="text--lead text-white mb-5">Desde Tuxtla Gutiérrez, Chiapas.</h4>
                                    <a className="btn btn--secondary" target="__blank" href="https://wa.me/+5219613037177?text=Lobo%20Tours:%20Estoy%20interesado%20en%20un%20viaje%20de%20clase%20económica">Solicita tus boletos aquí</a> */}

                                    <div className="slider-controls">
                                    {backgrounds.map((_, index) => (
                                        <button 
                                            key={index}
                                            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                                            onClick={() => setCurrentSlide(index)}
                                            aria-label={`Ir a slide ${index + 1}`}
                                        />
                                    ))}
            </div>
                                </Zoom>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero;