import React from 'react'
import b1 from '../../assets/img/1.jpg';  
import b2 from '../../assets/img/2.jpg';  
import { TfiAnnouncement } from 'react-icons/tfi';

export const ChurchLife = () =>{
    return    <section className='feat-container container church_life'>
    <div className="feat-blocks container ">
        <h1 className='title'><TfiAnnouncement  style = {{transform: 'rotate(-19deg)' }}  />&nbsp;La vie de l'église</h1>
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
}