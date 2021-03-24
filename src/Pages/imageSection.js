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
                <h4> I amm <span>Harold Vargas</span></h4>
                <p className="about-text">
                    I am an organized person who complies with the tasks and requirements that are demanded of him, capable of leading and solving problems quickly. I have values such as responsibility and teamwork. I consider myself a person with a high facility to absorb theoretical and practical knowledge, I have facilities for communication and customer advice.
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
