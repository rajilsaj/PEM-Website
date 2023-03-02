import React from 'react';

import { Copyright } from './copyrightSection';
import { Newsletter } from './newsletterSection';
import { FooterWidget } from './widgetSection';


/* FooterComponent */
export const FooterComponent = () => {
  return <>
      <footer className='generic-container main-footer'>
        <section className='founder-pem'>
          
        </section>
      <Newsletter />
      <FooterWidget />
      <Copyright />
      </footer>
      </>
}