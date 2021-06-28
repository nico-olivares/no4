import React, { useState, useEffect } from 'react';
import { Transition, Icon } from 'semantic-ui-react';
import './Carousel.css'


/**
 * 
 * @param {componentArray} Array of React components to show
 * @param {Boolean} horizontal default true. Whether the carousel will display horizontally or vertically.
 * @param {int} duration the duration each element will be displayed for. In milliseconds.
 * @param {int} numberShowing the number of elements to be displayed at one time. Default is 1, but it could be 2 or 3 as well. Max 3.
 * @returns 
 */
export default function Carousel({ componentArray, horizontal = true, duration = 3000, numberShowing = 1, animationSpeed = 600 }) {

    //keeps track of the component that should be showing. If there's more than one component showing, this will be the anchor component.
    const [ activeIndex, setActiveIndex ] = useState(0);
    let timer = null;

    //activeIndexes will be used in the case of showing 2 or 3 components instead of just 1.
    let activeIndexPlusOne = null;
    let activeIndexPlusTwo = null;


    


    if (numberShowing > 1) {
        activeIndexPlusOne = activeIndex + 1;
        if (activeIndexPlusOne >= componentArray.length) activeIndexPlusOne = 0;
    }
    if (numberShowing > 2) {
        activeIndexPlusTwo = activeIndex + 2;
        if (activeIndexPlusTwo === componentArray.length) activeIndexPlusTwo = 0;
        if (activeIndexPlusTwo > componentArray.length) activeIndexPlusTwo = 1;
    }

    //This timer will keep the carousel moving by itself at the specified rate.
    const myUseEffectTimeout = () => {
        timer = setTimeout(() => {
            if (activeIndex === componentArray.length -1) {
                setActiveIndex(0);
                
            } else {
                setActiveIndex(activeIndex + 1);
                
            }
            
        }, duration);
    }

    //This useEffect resets the timer each time in case the user clicks to move carousel forward or back so there's not two parallel timers.
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
                        <Transition key={index} 
                        visible={index === activeIndex || index === activeIndexPlusOne || index === activeIndexPlusTwo ? true : false } 
                        animation='fade left' 
                        duration={animationSpeed} >
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