import React from 'react'
import Title from '../Components/Tittle'
import ImageSection from './imageSection'


function AboutPage() {
    return (
        <div className="AboutPages">
            <Title  tittle={'Aboutme'} span={'About me'}/>       
            <ImageSection />
        </div>
    )
}
export default AboutPage
