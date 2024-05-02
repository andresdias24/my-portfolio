import React from 'react';
import {faWeibo} from  '@fortawesome/free-brands-svg-icons'
import {faGithub} from  '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hola, Soy
                    <span> Andres Diaz</span>
                </h1>
                <p className="h-sub-text">
                    Soy web develop de la ciuidad de Bogota, actualmente cuento con una experiencia de mas de 4 años en el desarrollo de app web con tecnologias como <strong>Angular, Vue, React, node.js, MongoDB, SQL</strong> cuento conexperiencia en  metodologias <strong>AGILES</strong> me gusta la tecnologia, la innovacion, me gusta la musica,  soy apasionado por el aprendizaje!!
                </p>
                <div className="icons">
                    <Link to="/portfolio" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                    </Link>
                </div>
            </header>
            
        </div>
    )
}

export default HomePage;
