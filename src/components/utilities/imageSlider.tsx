// eslint-disable-next-line
import REACT , {useState} from 'react'
import { SliderData } from './sliderData'
import  {TfiArrowCircleRight, TfiArrowCircleLeft} 
from "react-icons/tfi" 
import Title from './title_comp';


const ImageSlider = ({slides} : { slides: any}) => {
    let counter = 0;
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === length - 1 ? 0 : current - 1);
    };

    console.log(current);


    if(!Array.isArray(slides) || slides.length <= 0)  {
        return null;
    }

    return (
        <section className='slider'>
            <TfiArrowCircleLeft className='left-arrow' onClick={prevSlide} />
            <TfiArrowCircleRight className='right-arrow' onClick={nextSlide} />
            

        {SliderData.map((slide, index) =>{
                return (
                    <div className={index === current ? 'slide active': 'slide'} key={index}>
                        { index ===  current && (
                                <><span className='slide-title'><h2>{slide.title}</h2></span>
                                <img src={slide.image} alt={`PEM Slide  ${counter++}`} className='slider-image' />
                                </>)
                        }
                     </div>
                    
                )
        })}
        <nav className=''>
        <ul>
        {SliderData.map((slide, index) =>{
                return (
                   <li><a href='/#'>{slide.title}</a></li>
                )
        })}
        </ul>
        </nav>
        </section>
    )
}

export default ImageSlider;