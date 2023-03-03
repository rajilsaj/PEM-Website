import React from 'react'
import { TfiBook } from 'react-icons/tfi'
import ImageSlider from '../utilities/imageSlider'
import { SliderData } from '../utilities/sliderData'

export const BiblicalComp = () => {
    return  <section className='teaching-container'>
            <h1 className='title'><TfiBook />&nbsp;Enseignements Bibliques</h1>
            <div className='container teaching-slider '>
                
                <ImageSlider slides={SliderData} />
            </div>
        </section>
}