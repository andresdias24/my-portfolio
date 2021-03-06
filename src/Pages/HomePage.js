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
                    <span> Web Develop</span>
                </h1>
                <p className="h-sub-text">
                    Mi nombre es Harold Andres Vargas Diaz soy de Bogota, me desempeño como programador web actualmente cuento con una experiencia de mas de dos años en el desarrollo de app web con tecnologias como <strong>Angular8, Vue.js, React.js, node.js, PHP,</strong> tengo experiencia con la metodologia <strong>SCRUM</strong> estoy cursando la carrera de ingenieria de software,  me gusta la musica,  soy apasionado por el aprendizaje y la tecnología!!
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