import React from 'react'

export class EventDisplay extends React.Component {
    render() {
        return <div className="container">
            <div className="d-block">
                <div className="d-block-elt ">
                <h4 className=""> Date </h4>
                </div>
                <div className="d-block-elt ">
                <h4 className="">Heure </h4>
                </div>
                <div className="d-block-elt ">
                <h4 className="">Lieu </h4>
                </div>
                <div className="d-block-elt ">
                <h4 className="">Participation </h4>
                </div>
            </div>
        </div>
    }
}