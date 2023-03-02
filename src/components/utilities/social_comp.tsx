import React from 'react'
import { TfiFacebook, TfiTwitter, TfiYoutube, TfiInstagram } from "react-icons/tfi";


export const SocialIconsComp = () => {
    return <>
       <ul className="pem-social-icons">
            <li><a href="/#"><TfiFacebook/></a></li>
            <li><a href="/#"><TfiTwitter/></a></li>
           <li> <a href="/#"><TfiInstagram /></a></li>
           <li> <a href="/#"><TfiYoutube /></a></li>
      </ul>
    </>
}