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
                    Hi, I am
                    <span> Web Develop</span>
                </h1>
                <p className="h-sub-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="icons">
                <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faWeibo} className="icon web"/>
                    </Link>
                </div>
            </header>
            
        </div>
    )
}

export default HomePage;