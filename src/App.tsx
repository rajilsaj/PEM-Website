import React from 'react';
import './App.css';

import IntroSection from './components/header-comp/introSection';
import HeaderSection from './components/header-comp/headerSection';
import b1 from './assets/img/1.jpg';  
import b2 from './assets/img/2.jpg';  
import b3 from './assets/img/3.jpg';  
import b4 from './assets/img/4.jpg';   

function App() {
  return (
  <div className="App">

      <div className="header">
        <HeaderSection />
        <IntroSection />
      </div>

      {/* Section 1 */}
      <section className=''>

      </section>
      
        {/* Section 2 */}
      <section className='feat-container container'>
        <div className="feat-blocks container">
            <h1>La vie de l'église</h1>
            <div className='block-container'>

              <div className=' block'>

                  <img src={b1} alt={"b1"} />
                  <h2 className=''>Témoignages</h2>
                  <span className=''>
                  Découvrez les histoires extraordinaires de ceux qui ont expérimenté Jésus !
                  </span>
              </div>

              <div className=' block'>

                  <img src={b2} alt={"b2"} />
                  <h2 className=''>Eglise à votre écoute</h2>
                  <span className=''>
                  Découvrez nos services d’accompagnement spirituel                  </span>
              </div>

              <div className=' block'>

                  <img src={b1} alt={"b1"} />
                  <h2 className=''>Eglise à votre écoute</h2>
                  <span className=''>
                  Découvrez nos services d’accompagnement spirituel                  </span>
              </div>


              <div className=' block'>

                  <img src={b1} alt={"b1"} />
                  <h2 className=''>Eglise à votre écoute</h2>
                  <span className=''>
                  Découvrez nos services d’accompagnement spirituel                  </span>
              </div>

            </div>
        </div>

      </section>

        {/* Section 3 */}
      <section className='teaching-container'>
        <h1> Enseignements Bibliques</h1>
        <div className="container redly">
          
        </div>

      </section>

        {/* Footer  */}
      <footer className='generic-container redly'>
          <section className='founder-pem container'>
            
          </section>
          <section className='newsletter-pem mini-container'>
            
          </section>
          <section className='footer-pem mini-container'>

          </section>
          <section className='pem-copyright mini-container'>
          <ul className="et-social-icons">
            <li className="et-social-icon et-social-facebook">
              <a href="#" className="icon">
                <span>Facebook</span>
              </a>
            </li>
            <li className="et-social-icon et-social-twitter">
              <a href="#" className="icon">
                <span>Twitter</span>
              </a>
            </li>

          <li className="et-social-icon et-social-youtube">
          <a href="#" className="icon">
          <span>Youtube</span>
          </a>
          </li>


          <li className="et-social-icon et-social-instagram">
          <a href="#" className="icon">
          <span>Instagram</span>
          </a>
          </li>

          </ul>
          <div id="footer-info"> &copy;  Prions Ensemble Ministries 2023. Tous droits réservés 
          - <a href="politique-de-confidentialite">Politique de confidentialité </a>
          - <a href="politique-de-confidentialite-applications-icc">Politique de confidentialité application PEM </a>
          - <a href="mentions-legales">Mentions Légales </a>
          - <a href="cookies">Cookies </a>
          - <a href="mention-dinformation-applications">Mention d’information applications </a>
          </div> 
          </section>
      </footer>

    </div>
  );
}

export default App;
