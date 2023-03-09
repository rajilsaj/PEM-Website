import React from 'react'

// HOC to implement

interface featureProps {
    title : string;
    linkPage : string;
    description ?: string;
    image : string;
}

export const Feature = (props:featureProps) => {
    return <a href={props.linkPage}>
                <div className="feat_content ">
                    <div className="feat_icon ">
                        <img src={`${props.image}`} alt="" className=""/>
                    </div>
                    <div className="feat_text ">
                        <h2 className=" title"><span>{props.title}</span></h2>
                    </div>
                    <div className="description "><p>{props.description}&nbsp;</p></div>
                </div>
            </a>
}

