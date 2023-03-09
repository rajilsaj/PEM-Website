import React from  'react'
import { Feature } from './featureComp'
import  pem1service from '../../assets/img/pem_1.png'
import  pem2service from '../../assets/img/pem_2.png'
import  pem3service from '../../assets/img/pem_3.png'
import  pem4service from '../../assets/img/pem_4.png'


export class ChurchServices extends React.Component {
    render() {
        return <section className='church_services feat-container'>
            <div className="feat-blocks container">
                <div className="block-container">
                    <div className="block ">
                    <Feature title='Témoignages' linkPage='#' image={`${pem1service}`} description='Découvrez les histoires extraordinaires de ceux qui ont expérimenté Jésus !'/>
                    </div>
                    <div className="block">
                    <Feature title='Nos messages' linkPage='#' image={`${pem2service}`} description='Suivez la série en cours le plus grand privilège au monde'/>
                    </div>
                    <div className="block">
                    <Feature title='à votre écoute' linkPage='#' image={`${pem3service}`} description='Découvrez nos services d’accompagnement spirituel.'/>
                    </div>
                    <div className="block">
                    <Feature title='Formations' linkPage='#' image={`${pem4service}`} description="Apprendre la parole de Dieu c'est aussi  une façon de l’inviter à être avec nous."/>
                    </div>
                </div>
            </div>
        </section>
    }
}