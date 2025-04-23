import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Zoom } from 'react-awesome-reveal';
import { useParallax } from 'react-scroll-parallax';
import { useState, useEffect } from 'react';

import imgBackground01 from '../images/img-01.jpg';
import imgBackground02 from '../images/img-02.jpg';
import imgBackground03 from '../images/img-03.jpg';
import imgBackground04 from '../images/img-04.jpg';
import imgBackground05 from '../images/img-05.jpg';
import imgBackground06 from '../images/img-06.jpg';
import imgBackground07 from '../images/img-07.jpg';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const backgrounds = [imgBackground01, imgBackground02, imgBackground03, imgBackground04, imgBackground05, imgBackground06, imgBackground07];
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
                                    <h1 className="text--title text-white">5207 Sale Ave <br /> <span className="text--price">$1,060,000</span>
                                    </h1>
                                    <h4 className="text--lead text-white mb-5">Woodland Hills CA 91364</h4>
                                    <a className="btn btn--primary" target="__blank" href="https://wa.me/+13106334350?text=Hi,%20I'm%20interested%20in%20the%20property%20at%205207%20Sale%20Ave,%20Woodland%20Hills.%20Can%20you%20share%20more%20details%20or%20schedule%20a%20viewing?">Call now to schedule a viewing</a>

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