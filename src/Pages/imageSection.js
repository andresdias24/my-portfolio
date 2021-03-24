import React from 'react'
import about from '../img/aboutPerson.jpeg'
import cv from '../dataCV/cv.docx'

function imageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4> Hola <span> un poco mas sobre mi</span></h4>
                <p className="about-text">
                Soy una persona capaz de liderar y solucionar problemas rápidamente. Poseo valores como la responsabilidad y el trabajo en equipo. Me considero una persona con facilidad de absorber conocimientos teóricos y prácticos, tengo facilidades para la comunicación. 
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Countrie</p>
                    </div>
                    <div className="right-section">
                        <p>: Harold Andres Vargas Diaz</p>
                        <p>: 30</p>
                        <p>: Colombia</p>
                    </div>
                </div>
                <button className="btn"><a  href={cv} download>Dowload cv</a></button>
            </div>
        </div>
    )
}

export default imageSection
