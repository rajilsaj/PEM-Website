import React from 'react'
import HeaderSection from './headerSection'
import { ChurchServices } from '../sections/churchServices'
import { IntroSection } from './introSection'
import introbg from '../../assets/img/bg-pem-test.jpg'

export class Hero extends React.Component {
    render() {
        return  <div className="header">
                    <HeaderSection />
                    <IntroSection intro_background={introbg} />
                    <ChurchServices />
                </div>
    }
}

