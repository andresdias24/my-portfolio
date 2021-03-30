import React from 'react'
import Title from '../Components/Tittle'
import SkillsSection from '../Components/SkillsSection'
import ImageSection from './imageSection'


function AboutPage() {
    return (
        <div className="AboutPages">
            <Title  tittle={'Sobre mi'} span={'Sobre mi'}/>       
            <ImageSection />
            <Title  tittle={'Mis habilidades'} span={'Mis habilidades'}/>   
                <div className="skillContainer">
                    <SkillsSection  skill={'GIT'} progress={'80%'} width={'40%'}/>
                    <SkillsSection  skill={'javascript'} progress={'70%'} width={'70%'}/>
                    <SkillsSection  skill={'Vue'} progress={'70%'} width={'70%'}/>
                    <SkillsSection  skill={'MongoDB & MSQL'} progress={'70%'} width={'70%'}/>
                    <SkillsSection  skill={'Cypress'} progress={'70%'} width={'70%'}/>
                    <SkillsSection  skill={'Node'} progress={'50%'} width={'50%'}/>
                    <SkillsSection  skill={'Express'} progress={'50%'} width={'50%'}/>
                    <SkillsSection  skill={'Angular8'} progress={'50%'} width={'40%'}/>
                    <SkillsSection  skill={'PHP'} progress={'50%'} width={'40%'}/>
                    <SkillsSection  skill={'React'} progress={'40%'} width={'40%'}/>
                    <SkillsSection  skill={'NUXT'} progress={'40%'} width={'40%'}/>
                </div>    
        </div>
    )
}
export default AboutPage
