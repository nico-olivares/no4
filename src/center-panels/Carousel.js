import React, { useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { Transition, Icon } from 'semantic-ui-react';
import './Carousel.css'


/**
 * 
 * @param {componentArray} Array of components to show
 * @param {Boolean} horizontal default true. Whether the carousel will display horizontally or vertically.
 * @param {int} duration the duration each element will be displayd for. In milliseconds
 * @param {int} numberShowing the number of elements to be displayed at one time. Default is 1, but it could be 2 or 3 as well. Max 3
 * @returns 
 */
export default function Carousel({ componentArray, horizontal = true, duration = 3000, numberShowing = 1, animationSpeed = 600 }) {

    const [ activeIndex, setActiveIndex ] = useState(0);
let timer = null;
let two = 0;
let three = 0;
if (numberShowing > 1) two = 1;
if (numberShowing > 2) three = 2;

const myUseEffectTimeout = () => {
    timer = setTimeout(() => {
        if (activeIndex === componentArray.length -1) {
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex + 1);
        }
    }, duration);
}

useEffect(() => {
    clearTimeout(timer);
    myUseEffectTimeout();
}, [activeIndex]);

    return (
        <div className={horizontal ? 'carousel horizontal' : 'carousel vertical'} >
            <Icon name={horizontal ? 'chevron circle left' : 'chevron circle up'} className='carousel-arrow' size='big' color='blue' onClick={() => {
                if (activeIndex === 0) {
                    setActiveIndex(componentArray.length - 1);
                } else {
                    setActiveIndex(activeIndex - 1);
                }
                clearTimeout(timer);
            }} />
                
            {componentArray.map((item, index) => {
                return (
                    <Transition key={index} visible={index === activeIndex || index === activeIndex + two || index === activeIndex + three ? true : false } animation={horizontal ? (index === activeIndex ? 'fade left' : 'fade right') : (index === activeIndex ? 'fade up' : 'fade down') } duration={animationSpeed} >
                        <div className='carousel-component-container' index={index} >
                            {item}
                        </div>
                    </Transition>
                )
            })}
            <Icon name={horizontal ? 'chevron circle right' : 'chevron circle down'} className='carousel-arrow' size='big' color='blue' primary onClick={() => {
                if (activeIndex === componentArray.length - 1) {
                    setActiveIndex(0);
                } else {
                    setActiveIndex(activeIndex + 1);
                }
                clearTimeout(timer);
            }} />
                

        </div>
    )
}