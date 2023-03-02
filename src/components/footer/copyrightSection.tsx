import React from 'react'
import { SocialIconsComp } from '../utilities/social_comp'


export const Copyright = () => {
    return  <section className='pem-copyright mini-container'>
    <SocialIconsComp />
    <CopyrightMenu />
  </section>
}

export const CopyrightMenu = () => {
    return <>
            <div id="footer-info"> &copy;  Prions Ensemble Ministries 2023. Tous droits réservés 
            - <a href="/#">Politique de confidentialité </a>
            - <a href="p/#">Politique de confidentialité application PEM </a>
            - <a href="/#">Mentions Légales </a>
            - <a href="/#">Cookies </a>
            - <a href="/#">Mention d’information applications </a>
            </div> 
        </>
}