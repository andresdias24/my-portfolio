import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import Title from '../Components/Tittle'

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Title  tittle={'Contacto'} span={'Contacto'}/>       
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3977.012760353518!2d-74.12595548523811!3d4.5917325466641525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20maps%20centro%20mayor%20bogota!5e0!3m2!1sen!2sco!4v1616184853039!5m2!1sen!2sco" width="290" height="300" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+57 3196748729'} text2={'+031 2001210'} title={'Telefono'}/>
                    <ContactItem icon={email} text2={'andresdias24@gmail.com'} title={'Correo'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;

