import React from 'react'
import { TfiCalendar, TfiLocationPin, TfiTicket, TfiTime } from 'react-icons/tfi'

export class EventDisplay extends React.Component {
    render() {
        return <div className="container">
            <div className="d-block">
                <div className="d-block-elt ">
                    <h4 className=""><TfiCalendar/> Date </h4>
                    <p>Value 1</p>
                </div>
                <div className="d-block-elt ">
                <h4 className=""><TfiTime/>Heure </h4>
                <p>Value 1</p>
                </div>
                <div className="d-block-elt ">
                <h4 className=""><TfiLocationPin/> Lieu </h4>
                <p>Value 1</p>
                </div>
                <div className="d-block-elt ">
                <h4 className=""><TfiTicket/> Participation </h4>
                <p>Value 1</p>
                </div>
            </div>
        </div>
    }
}