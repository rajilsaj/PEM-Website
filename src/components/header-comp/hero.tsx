import React from 'react'
import HeaderSection from './headerSection'
import IntroSection from './introSection'
import { ChurchServices } from '../sections/churchServices'

export class Hero extends React.Component {
    render() {
        return  <div className="header">
                    <HeaderSection />
                    <IntroSection />
                    <ChurchServices />
                </div>
    }
}

