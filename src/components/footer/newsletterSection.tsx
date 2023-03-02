import React from 'react'

export const Newsletter = () => {
    return <>
     <section className='newsletter-pem mini-container' >
        <div className="newsletter-text">
                <h4 className="newsletter-title"><span>Souscrire à notre newsletter</span></h4>
                <div className="newsletter-desc">
                    <p>Inscrivez vous pour recevoir l’actualité de Prions Ensemble Ministries</p>
                </div>
        </div>
        <div className="newsletter-form">
                    <label className="et_pb_contact_form_label" >E-mail</label>
                    <input id="et_pb_signup_email" className="input" type="text" placeholder="E-mail" name="et_pb_signup_email"/>
        </div>
    </section>
    </>
}