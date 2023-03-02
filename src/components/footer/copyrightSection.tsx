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
            <div className="footer-info"> 
            <ul>
                <li>
                  <a href='/#'>
                  &copy;  Prions Ensemble Ministries 2023
                  </a>
                </li>
                <li>
                  <a href="/#"> Tous droits réservés  </a>
                </li>
                <li>
                  <a href="/#">Politique de confidentialité </a>
                </li>
                <li>
                  <a href="/#">Mentions Légales </a>
                </li>
                <li>
                  <a href="/#">Cookies </a>
                </li>
                <li>
                  <a href="/#">Mention d’information applications </a>
                </li>
              </ul>
            </div> 
        </>
}